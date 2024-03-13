# .gitignore文件

> gitignore - 指定要忽略的故意未跟踪的文件

## 描述

`gitignore` 文件指定 Git 应忽略的故意未跟踪的文件。已被 Git 跟踪的文件不受影响；详细信息请参阅下面的注释。

`gitignore` 文件中的每一行指定一个模式。当决定是否忽略路径时，Git 通常会检查来自多个源的`gitignore` 模式，按照以下优先级顺序，从最高到最低（在一个优先级内，最后匹配的模式决定结果）：

- 从命令行读取的模式，用于支持它们的命令。

- 从与路径位于同一目录中的 `.gitignore` 文件或任何父目录（直至工作树的顶层）中的文件中读取的模式，较高级别的文件中的模式被较低级别的文件中的模式覆盖，直至包含该文件的目录。这些模式相对于 .gitignore 文件的位置匹配。项目通常在其存储库中包含此类 `.gitignore` 文件，其中包含作为项目构建的一部分生成的文件的模式。
- 模式从 `$GIT_DIR/info/exclude` 读取。

- 从配置变量 `core.excludesFile` 指定的文件中读取的模式。

在哪个文件中放置模式取决于模式的使用方式。

- 应该通过克隆进行版本控制并分发到其他存储库的模式（即所有开发人员都希望忽略的文件）应该放入一个 `.gitignore` 文件中。

- 特定于特定存储库但不需要与其他相关存储库共享的模式（例如，位于存储库中但特定于一个用户的工作流的辅助文件）应放入 `$GIT_DIR/info/exclude` 该文件中。

- 用户希望 Git 在所有情况下忽略的模式（例如，由用户选择的编辑器生成的备份或临时文件）通常会进入用户 `core.excludesFile` 的 `~/.gitconfig` .其默认值为 `$XDG_CONFIG_HOME/git/ignore`。如果 `$XDG_CONFIG_HOME` 未设置或为空，则改用 `$HOME/.config/git/ignore`。

基础 Git 管道工具（如 `git ls-files` 和 `git read-tree`）读取命令行选项指定的模式，或从命令行选项指定的文件中读取 gitignore 模式。更高级别的 Git 工具（例如 `git status` 和 `git add`）使用来自上述源的模式。

## 匹配格式

- 空行不匹配任何文件，因此它可以用作可读性的分隔符。

- 以 `#` 开头的行用作注释。对于以哈希开头的模式，在第一个哈希前面放置一个反斜杠 （“ `\` ”）。

- 尾随空格将被忽略，除非它们用反斜杠 （“ `\` ”） 引用。

- 一个可选的前缀 “ `!` ” 否定模式;被先前模式排除的任何匹配文件都将再次包含。如果排除了文件的父目录，则无法重新包含该文件。出于性能原因，Git 不会列出排除的目录，因此所包含文件上的任何模式都不起作用，无论它们在何处定义。对于以文字 “ `!` ” 开头的模式，在第一个 “ `!` ” 前面加上反斜杠 （“ `\` ”），例如 “ `\!important!.txt` ”。

- 斜杠 “ `/` ” 用作目录分隔符。分隔符可能出现在 `.gitignore` 搜索模式的开头、中间或结尾。

- 如果模式的开头或中间（或两者）有分隔符，则该模式相对于特定 `.gitignore` 文件本身的目录级别。否则，该模式也可能在低于该 `.gitignore` 水平的任何水平上匹配。

- 如果模式的末尾有分隔符，则该模式将仅匹配目录，否则该模式可以同时匹配文件和目录。
  例如，模式 `doc/frotz/` 与`doc/frotz`目录匹配，但不匹配`a/doc/frotz`目录; 但是 `frotz/` 匹配 `frotz` ， `a/frotz` 这是一个目录（所有路径都是相对于文件的 `.gitignore` ）。

- 星号“ `*` ”与除斜杠以外的任何内容都匹配。字符 “ `?` ” 匹配除 “ `/` ” 之外的任何一个字符。范围表示法，例如 `[a-zA-Z]` ，可用于匹配范围中的一个字符。参见 fnmatch（3） 和 FNM_PATHNAME 标志以获得更详细的描述。

在与完整路径名匹配的模式中，两个连续的星号 （“ `**` ”） 可能具有特殊含义：

- 前导“ `**` ”后跟斜杠表示所有目录中的匹配。例如，“ `**/foo` ”在任何地方匹配文件或目录“ `foo` ”，与模式“ `foo` ”相同。 “`**/foo/bar`” 匹配文件或目录“ `bar` ”直接位于目录“ `foo` ”下的任何位置。

- 尾随的“ `/**` ”与里面的所有内容匹配。例如，“ `abc/**` ”匹配目录“ `abc` ”中的所有文件，相对于 `.gitignore` 文件的位置，具有无限深度。

- 一个斜杠后跟两个连续的星号，然后一个斜杠匹配零个或多个目录。例如，“ `a/**/b` ”匹配“ `a/b` ”，“ `a/x/b` ”，“ `a/x/y/b`”等。

- 其他连续的星号被视为常规星号，并将根据以前的规则进行匹配。

## 配置
可选配置变量 `core.excludesFile` 指示包含要排除的文件名模式的文件的路径，类似于 `$GIT_DIR/info/exclude` 。除了 `$GIT_DIR/info/exclude` 中的模式之外，还使用排除文件中的模式。

## 注意
`.gitignore` 文件的目的是确保 Git 未跟踪的某些文件保持不被跟踪。

要停止跟踪当前正在跟踪的文件，请使用 `git rm --cached` 从索引中删除该文件。然后可以将文件名添加到 `.gitignore` 文件中，以阻止该文件在以后的提交中重新引入。

访问工作树中的 `.gitignore` 文件时，Git 不会遵循符号链接。当从索引或树访问文件时与从文件系统访问文件时，这可以保持行为一致。

## 例子

- 模式 `hello.*` 匹配名称以 `hello`. 开头的任何文件或目录。如果想将其限制为仅限于目录而不是其子目录，则可以在模式前面加上斜线，即 `/hello.*` ；该模式现在匹配 `hello.txt` 、 `hello.c` 但不匹配 `a/hello.java` 。

- 模式 `foo/` 将匹配目录 `foo` 及其下面的路径，但不会匹配常规文件或符号链接 `foo` （这与 Git 中 pathspec 的一般工作方式一致）

- 该模式 `doc/frotz` 和 `/doc/frotz` 在任何`.gitignore` 文件中都具有相同的效果。换句话说，如果模式中已经存在中间斜杠，则前导斜杠无关紧要。

- 模式 `foo/*` 匹配 `foo/test.json` （常规文件）、 `foo/bar` （目录），但它不匹配 `foo/bar/hello.c` （常规文件），因为模式中的星号与其中有斜杠的星号不匹配 `bar/hello.c` 。

```bash
$ git status
[...]
# Untracked files:
[...]
#       Documentation/foo.html
#       Documentation/gitignore.html
#       file.o
#       lib.a
#       src/internal.o
[...]
$ cat .git/info/exclude
# ignore objects and archives, anywhere in the tree.
*.[oa]
$ cat Documentation/.gitignore
# ignore generated html files,
*.html
# except foo.html which is maintained by hand
!foo.html
$ git status
[...]
# Untracked files:
[...]
#       Documentation/foo.html
[...]
```

另一个例子：

```bash
$ cat .gitignore
vmlinux*
$ ls arch/foo/kernel/vm*
arch/foo/kernel/vmlinux.lds.S
$ echo '!/vmlinux*' >arch/foo/kernel/.gitignore
```

第二个 `.gitignore` 可防止 Git 忽略 `arch/foo/kernel/vmlinux.lds.S` .

排除除特定目录 `foo/bar` 之外的所有内容的示例（注意 `/*` - 如果没有斜杠，通配符也会排除 `foo/bar` 内的所有内容）：
```bash
$ cat .gitignore
# exclude everything except directory foo/bar
/*
!/foo
/foo/*
!/foo/bar
```


## 参考资料
- [https://git-scm.com/docs/gitignore/en](https://git-scm.com/docs/gitignore/en)

