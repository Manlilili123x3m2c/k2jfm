# 命名规范

样式名规范：

1. 组件样式名：`k-{组件名}`
2. 组件内部样式名：`k-{类别名}`
3. 通用样式名：`c-{样式类型}`
4. 名称用小写，多个单词使用连词符-

css颜色规范：

1. 使用小写字母，例如：#cad0dd
2. 尽量使用全局定义的变量来定义颜色，变量定义在`styles/themes/default.styl'中

css定义规范：

1. 对于可能通过主题改变的属性值，都提取成变量
2. 变量名使用小写字母，并且使用`${组件名}-{类型}-{属性名}`的方式命名
3. 样式名不要深层嵌套，节省文本大小，提高选择器性能

距离/长度/大小单位规范：

1. 尽量使用em/rem单位定义，其中根节点的单位为`14 / 16em`，即`14px`

组件属性名规范：

1. Boolean型属性，动词型用is开头，例如：isShow，-able型则用原单词，例如：checkable
2. 对于取值只有两种可能的属性，可以用Boolean类型代替，例如：type的取值为bar/circle，
   则可以将bar定义false，circle为true，这样组件使用时，只需要加上<Component circle />
   即可

