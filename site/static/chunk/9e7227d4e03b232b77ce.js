webpackJsonp([115],{

/***/ "./site/components/dropdown/index.json":
/***/ (function(module, exports) {

module.exports = {"setting":{"title":"下拉菜单","category":"组件","order":0},"catalogs":[],"contents":"<blockquote>\n<p><code>kpc/component/dropdown</code>暴露出来的并非<code>Dropdown</code>组件本身，而是包装该组件的函数（vdt中称作宏函数）所以不要试图继承它。</p>\n</blockquote>\n<h1 id='header-%E5%B1%9E%E6%80%A7'>属性</h1><h2 id='header-Dropdown'>Dropdown</h2><div class=\"k-table-wrapper k-border\">\n                    <table class=\"k-table\">\n                        <thead><tr>\n<th>属性</th>\n<th>说明</th>\n<th>类型</th>\n<th>默认值</th>\n</tr>\n</thead>\n                        <tbody><tr>\n<td>trigger</td>\n<td>触发方式，<code>hover</code>为悬停触发，<code>click</code>为点击触发</td>\n<td><code>&quot;hover&quot;</code> &#124; <code>&quot;click&quot;</code></td>\n<td><code>&quot;hover&quot;</code></td>\n</tr>\n<tr>\n<td>disabled</td>\n<td>是否禁用整个菜单</td>\n<td><code>Boolean</code></td>\n<td><code>false</code></td>\n</tr>\n<tr>\n<td>position</td>\n<td>菜单弹出的位置，默认在触发器正下方向下偏移<code>5px</code>的地方</td>\n<td><code>Object</code></td>\n<td><code>{my: &#39;center top+5&#39;, &#39;center bottom&#39;}</code></td>\n</tr>\n</tbody>\n                    </table>\n                </div><h2 id='header-DropdownItem'>DropdownItem</h2><div class=\"k-table-wrapper k-border\">\n                    <table class=\"k-table\">\n                        <thead><tr>\n<th>属性</th>\n<th>说明</th>\n<th>类型</th>\n<th>默认值</th>\n</tr>\n</thead>\n                        <tbody><tr>\n<td>disabled</td>\n<td>是否禁用该菜单项</td>\n<td><code>Boolean</code></td>\n<td><code>false</code></td>\n</tr>\n<tr>\n<td>hideOnSelect</td>\n<td>是否选中该菜单后隐藏整个菜单</td>\n<td><code>Boolean</code></td>\n<td><code>true</code></td>\n</tr>\n</tbody>\n                    </table>\n                </div><h2 id='header-%E4%BA%8B%E4%BB%B6'>事件</h2><h2 id='header-DropdownItem'>DropdownItem</h2><div class=\"k-table-wrapper k-border\">\n                    <table class=\"k-table\">\n                        <thead><tr>\n<th>事件名</th>\n<th>说明</th>\n<th>参数</th>\n</tr>\n</thead>\n                        <tbody><tr>\n<td>select</td>\n<td>菜单项被选中时触发，不管是点击还是键盘操作选中</td>\n<td>被选中的<code>DropdownItem</code>实例</td>\n</tr>\n<tr>\n<td>click</td>\n<td>菜单项被点击时触发</td>\n<td><code>Event</code></td>\n</tr>\n<tr>\n<td>mouseenter</td>\n<td>鼠标进入菜单项时触发</td>\n<td><code>Event</code></td>\n</tr>\n<tr>\n<td>mouseleave</td>\n<td>鼠标离开菜单项时触发</td>\n<td><code>Event</code></td>\n</tr>\n</tbody>\n                    </table>\n                </div>","codes":[{"language":"js","content":"import Intact from 'intact';\nimport template from './index.vdt';\n\nexport default class extends Intact {\n    @Intact.template()\n    static template = template;\n}"}],"index":32,"sideBars":{"组件":[{"title":"面包屑","path":"components/breadcrumb/index.md","children":[{"title":"属性","path":"#header-%E5%B1%9E%E6%80%A7","level":1,"content":"<h1 id='header-%E5%B1%9E%E6%80%A7'>属性</h1>","text":"属性","children":[{"title":"Breadcrumb","path":"#header-Breadcrumb","level":2,"content":"<h2 id='header-Breadcrumb'>Breadcrumb</h2>","text":"Breadcrumb","children":[]},{"title":"BreadcrumbItem","path":"#header-BreadcrumbItem","level":2,"content":"<h2 id='header-BreadcrumbItem'>BreadcrumbItem</h2>","text":"BreadcrumbItem","children":[]}]}]},{"title":"按钮","path":"components/button/index.md","children":[{"title":"属性","path":"#header-%E5%B1%9E%E6%80%A7","level":1,"content":"<h1 id='header-%E5%B1%9E%E6%80%A7'>属性</h1>","text":"属性","children":[{"title":"Button","path":"#header-Button","level":2,"content":"<h2 id='header-Button'>Button</h2>","text":"Button","children":[]},{"title":"ButtonGroup","path":"#header-ButtonGroup","level":2,"content":"<h2 id='header-ButtonGroup'>ButtonGroup</h2>","text":"ButtonGroup","children":[]}]},{"title":"方法","path":"#header-%E6%96%B9%E6%B3%95","level":1,"content":"<h1 id='header-%E6%96%B9%E6%B3%95'>方法</h1>","text":"方法","children":[{"title":"Button","path":"#header-Button","level":2,"content":"<h2 id='header-Button'>Button</h2>","text":"Button","children":[]}]}]},{"title":"复选框","path":"components/checkbox/index.md","children":[{"title":"属性","path":"#header-%E5%B1%9E%E6%80%A7","level":1,"content":"<h1 id='header-%E5%B1%9E%E6%80%A7'>属性</h1>","text":"属性","children":[]}]},{"title":"日期选择","path":"components/datepicker/index.md","children":[{"title":"属性","path":"#header-%E5%B1%9E%E6%80%A7","level":1,"content":"<h1 id='header-%E5%B1%9E%E6%80%A7'>属性</h1>","text":"属性","children":[]}]},{"title":"弹窗","path":"components/dialog/index.md","children":[{"title":"属性","path":"#header-%E5%B1%9E%E6%80%A7","level":1,"content":"<h1 id='header-%E5%B1%9E%E6%80%A7'>属性</h1>","text":"属性","children":[]},{"title":"扩展点","path":"#header-%E6%89%A9%E5%B1%95%E7%82%B9","level":1,"content":"<h1 id='header-%E6%89%A9%E5%B1%95%E7%82%B9'>扩展点</h1>","text":"扩展点","children":[]},{"title":"方法","path":"#header-%E6%96%B9%E6%B3%95","level":1,"content":"<h1 id='header-%E6%96%B9%E6%B3%95'>方法</h1>","text":"方法","children":[]},{"title":"事件","path":"#header-%E4%BA%8B%E4%BB%B6","level":1,"content":"<h1 id='header-%E4%BA%8B%E4%BB%B6'>事件</h1>","text":"事件","children":[]}]},{"title":"下拉菜单","path":"components/dropdown/index.md","children":[{"title":"属性","path":"#header-%E5%B1%9E%E6%80%A7","level":1,"content":"<h1 id='header-%E5%B1%9E%E6%80%A7'>属性</h1>","text":"属性","children":[{"title":"Dropdown","path":"#header-Dropdown","level":2,"content":"<h2 id='header-Dropdown'>Dropdown</h2>","text":"Dropdown","children":[]},{"title":"DropdownItem","path":"#header-DropdownItem","level":2,"content":"<h2 id='header-DropdownItem'>DropdownItem</h2>","text":"DropdownItem","children":[]},{"title":"事件","path":"#header-%E4%BA%8B%E4%BB%B6","level":2,"content":"<h2 id='header-%E4%BA%8B%E4%BB%B6'>事件</h2>","text":"事件","children":[]},{"title":"DropdownItem","path":"#header-DropdownItem","level":2,"content":"<h2 id='header-DropdownItem'>DropdownItem</h2>","text":"DropdownItem","children":[]}]}]},{"title":"可编辑文本","path":"components/editable/index.md","children":[{"title":"属性","path":"#header-%E5%B1%9E%E6%80%A7","level":1,"content":"<h1 id='header-%E5%B1%9E%E6%80%A7'>属性</h1>","text":"属性","children":[]},{"title":"事件","path":"#header-%E4%BA%8B%E4%BB%B6","level":1,"content":"<h1 id='header-%E4%BA%8B%E4%BB%B6'>事件</h1>","text":"事件","children":[]}]},{"title":"表单","path":"components/form/index.md","children":[{"title":"属性","path":"#header-%E5%B1%9E%E6%80%A7","level":1,"content":"<h1 id='header-%E5%B1%9E%E6%80%A7'>属性</h1>","text":"属性","children":[{"title":"FormItem","path":"#header-FormItem","level":2,"content":"<h2 id='header-FormItem'>FormItem</h2>","text":"FormItem","children":[]}]},{"title":"扩展点","path":"#header-%E6%89%A9%E5%B1%95%E7%82%B9","level":1,"content":"<h1 id='header-%E6%89%A9%E5%B1%95%E7%82%B9'>扩展点</h1>","text":"扩展点","children":[{"title":"FormItem","path":"#header-FormItem","level":2,"content":"<h2 id='header-FormItem'>FormItem</h2>","text":"FormItem","children":[]}]},{"title":"事件","path":"#header-%E4%BA%8B%E4%BB%B6","level":1,"content":"<h1 id='header-%E4%BA%8B%E4%BB%B6'>事件</h1>","text":"事件","children":[{"title":"Form","path":"#header-Form","level":2,"content":"<h2 id='header-Form'>Form</h2>","text":"Form","children":[]}]},{"title":"方法","path":"#header-%E6%96%B9%E6%B3%95","level":1,"content":"<h1 id='header-%E6%96%B9%E6%B3%95'>方法</h1>","text":"方法","children":[{"title":"Form","path":"#header-Form","level":2,"content":"<h2 id='header-Form'>Form</h2>","text":"Form","children":[]}]},{"title":"静态方法","path":"#header-%E9%9D%99%E6%80%81%E6%96%B9%E6%B3%95","level":1,"content":"<h1 id='header-%E9%9D%99%E6%80%81%E6%96%B9%E6%B3%95'>静态方法</h1>","text":"静态方法","children":[{"title":"Form","path":"#header-Form","level":2,"content":"<h2 id='header-Form'>Form</h2>","text":"Form","children":[]}]}]},{"title":"栅格","path":"components/grid/index.md","children":[{"title":"属性","path":"#header-%E5%B1%9E%E6%80%A7","level":1,"content":"<h1 id='header-%E5%B1%9E%E6%80%A7'>属性</h1>","text":"属性","children":[{"title":"Row","path":"#header-Row","level":2,"content":"<h2 id='header-Row'>Row</h2>","text":"Row","children":[]},{"title":"Col","path":"#header-Col","level":2,"content":"<h2 id='header-Col'>Col</h2>","text":"Col","children":[]}]}]},{"title":"输入框","path":"components/input/index.md","children":[{"title":"属性","path":"#header-%E5%B1%9E%E6%80%A7","level":1,"content":"<h1 id='header-%E5%B1%9E%E6%80%A7'>属性</h1>","text":"属性","children":[]},{"title":"扩展点","path":"#header-%E6%89%A9%E5%B1%95%E7%82%B9","level":1,"content":"<h1 id='header-%E6%89%A9%E5%B1%95%E7%82%B9'>扩展点</h1>","text":"扩展点","children":[]},{"title":"事件","path":"#header-%E4%BA%8B%E4%BB%B6","level":1,"content":"<h1 id='header-%E4%BA%8B%E4%BB%B6'>事件</h1>","text":"事件","children":[]}]},{"title":"全局提示","path":"components/message/index.md","children":[{"title":"属性","path":"#header-%E5%B1%9E%E6%80%A7","level":1,"content":"<h1 id='header-%E5%B1%9E%E6%80%A7'>属性</h1>","text":"属性","children":[]},{"title":"静态方法","path":"#header-%E9%9D%99%E6%80%81%E6%96%B9%E6%B3%95","level":1,"content":"<h1 id='header-%E9%9D%99%E6%80%81%E6%96%B9%E6%B3%95'>静态方法</h1>","text":"静态方法","children":[]}]},{"title":"分页","path":"components/pagination/index.md","children":[{"title":"属性","path":"#header-%E5%B1%9E%E6%80%A7","level":1,"content":"<h1 id='header-%E5%B1%9E%E6%80%A7'>属性</h1>","text":"属性","children":[]},{"title":"方法","path":"#header-%E6%96%B9%E6%B3%95","level":1,"content":"<h1 id='header-%E6%96%B9%E6%B3%95'>方法</h1>","text":"方法","children":[{"title":"Pagination","path":"#header-Pagination","level":2,"content":"<h2 id='header-Pagination'>Pagination</h2>","text":"Pagination","children":[]}]}]},{"title":"进度条","path":"components/progress/index.md","children":[{"title":"属性","path":"#header-%E5%B1%9E%E6%80%A7","level":1,"content":"<h1 id='header-%E5%B1%9E%E6%80%A7'>属性</h1>","text":"属性","children":[]}]},{"title":"单选框","path":"components/radio/index.md","children":[{"title":"属性","path":"#header-%E5%B1%9E%E6%80%A7","level":1,"content":"<h1 id='header-%E5%B1%9E%E6%80%A7'>属性</h1>","text":"属性","children":[]}]},{"title":"选择框","path":"components/select/index.md","children":[{"title":"属性","path":"#header-%E5%B1%9E%E6%80%A7","level":1,"content":"<h1 id='header-%E5%B1%9E%E6%80%A7'>属性</h1>","text":"属性","children":[{"title":"Select","path":"#header-Select","level":2,"content":"<h2 id='header-Select'>Select</h2>","text":"Select","children":[]},{"title":"Option","path":"#header-Option","level":2,"content":"<h2 id='header-Option'>Option</h2>","text":"Option","children":[]}]}]},{"title":"滑块","path":"components/slider/index.md","children":[{"title":"属性","path":"#header-%E5%B1%9E%E6%80%A7","level":1,"content":"<h1 id='header-%E5%B1%9E%E6%80%A7'>属性</h1>","text":"属性","children":[]}]},{"title":"数字输入框","path":"components/spinner/index.md","children":[{"title":"属性","path":"#header-%E5%B1%9E%E6%80%A7","level":1,"content":"<h1 id='header-%E5%B1%9E%E6%80%A7'>属性</h1>","text":"属性","children":[]}]},{"title":"步骤条","path":"components/steps/index.md","children":[{"title":"属性","path":"#header-%E5%B1%9E%E6%80%A7","level":1,"content":"<h1 id='header-%E5%B1%9E%E6%80%A7'>属性</h1>","text":"属性","children":[{"title":"Steps","path":"#header-Steps","level":2,"content":"<h2 id='header-Steps'>Steps</h2>","text":"Steps","children":[]},{"title":"Step","path":"#header-Step","level":2,"content":"<h2 id='header-Step'>Step</h2>","text":"Step","children":[]}]}]},{"title":"表格","path":"components/table/index.md","children":[{"title":"表格属性 Table","path":"#header-%E8%A1%A8%E6%A0%BC%E5%B1%9E%E6%80%A7%20Table","level":1,"content":"<h1 id='header-%E8%A1%A8%E6%A0%BC%E5%B1%9E%E6%80%A7%20Table'>表格属性 Table</h1>","text":"表格属性 Table","children":[]}]},{"title":"穿梭框","path":"components/transfer/index.md","children":[{"title":"属性","path":"#header-%E5%B1%9E%E6%80%A7","level":1,"content":"<h1 id='header-%E5%B1%9E%E6%80%A7'>属性</h1>","text":"属性","children":[]}]}],"undefined":[{"title":"按钮类型","path":"components/table/demo/basic.md","children":[]}]},"highlighted":[{"language":"js","content":"<pre><code class=\"hljs js\"><span class=\"hljs-keyword\">import</span> Intact <span class=\"hljs-keyword\">from</span> <span class=\"hljs-string\">'intact'</span>;\n<span class=\"hljs-keyword\">import</span> template <span class=\"hljs-keyword\">from</span> <span class=\"hljs-string\">'./index.vdt'</span>;\n\n<span class=\"hljs-keyword\">export</span> <span class=\"hljs-keyword\">default</span> <span class=\"hljs-class\"><span class=\"hljs-keyword\">class</span> <span class=\"hljs-keyword\">extends</span> <span class=\"hljs-title\">Intact</span> </span>{\n    @Intact.template()\n    <span class=\"hljs-keyword\">static</span> template = template;\n}</code></pre>"}]}

/***/ })

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zaXRlL2NvbXBvbmVudHMvZHJvcGRvd24vaW5kZXguanNvbiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLGtCQUFrQixXQUFXLHlDQUF5Qyw4akJBQThqQixXQUFXLGNBQWMsYUFBYSxXQUFXLDhCQUE4QixXQUFXLHlQQUF5UCxTQUFTLGlCQUFpQixPQUFPLG1CQUFtQixpMkNBQWkyQyx1REFBdUQscUNBQXFDLHlDQUF5Qyx5REFBeUQsR0FBRyxFQUFFLHlCQUF5QixPQUFPLG1FQUFtRSwySUFBMkksb0pBQW9KLEVBQUUsd0tBQXdLLEVBQUUsRUFBRSxFQUFFLDhEQUE4RCwySUFBMkksZ0lBQWdJLEVBQUUseUpBQXlKLEVBQUUsRUFBRSwySUFBMkksZ0lBQWdJLEVBQUUsRUFBRSxFQUFFLGlFQUFpRSw0SUFBNEksRUFBRSxFQUFFLG9FQUFvRSw0SUFBNEksRUFBRSxFQUFFLDhEQUE4RCw0SUFBNEksRUFBRSxpS0FBaUssRUFBRSw0SUFBNEksRUFBRSw0SUFBNEksRUFBRSxFQUFFLGtFQUFrRSwySUFBMkksMElBQTBJLEVBQUUsOEpBQThKLEVBQUUsNElBQTRJLEVBQUUsOEpBQThKLEVBQUUsRUFBRSxFQUFFLG1FQUFtRSw0SUFBNEksRUFBRSw0SUFBNEksRUFBRSxFQUFFLDREQUE0RCwySUFBMkksMElBQTBJLEVBQUUsRUFBRSxnS0FBZ0ssMElBQTBJLEVBQUUsRUFBRSwySUFBMkksc0hBQXNILEVBQUUsRUFBRSwySUFBMkksc0hBQXNILEVBQUUsRUFBRSxxTEFBcUwsc0hBQXNILEVBQUUsRUFBRSxFQUFFLDREQUE0RCwySUFBMkksaUhBQWlILEVBQUUsaUhBQWlILEVBQUUsRUFBRSxFQUFFLDhEQUE4RCw0SUFBNEksRUFBRSxpS0FBaUssRUFBRSw0SUFBNEksRUFBRSxFQUFFLGlFQUFpRSw0SUFBNEksRUFBRSxzTEFBc0wsRUFBRSxFQUFFLGtFQUFrRSw0SUFBNEksRUFBRSwySUFBMkksb0pBQW9KLEVBQUUsRUFBRSxFQUFFLGlFQUFpRSw0SUFBNEksRUFBRSxFQUFFLDhEQUE4RCw0SUFBNEksRUFBRSxFQUFFLCtEQUErRCwySUFBMkksZ0lBQWdJLEVBQUUsZ0lBQWdJLEVBQUUsRUFBRSxFQUFFLDhEQUE4RCw0SUFBNEksRUFBRSxFQUFFLGtFQUFrRSw0SUFBNEksRUFBRSxFQUFFLDhEQUE4RCwySUFBMkksMkhBQTJILEVBQUUsc0hBQXNILEVBQUUsRUFBRSxFQUFFLDZEQUE2RCx3TkFBd04sRUFBRSxFQUFFLGlFQUFpRSw0SUFBNEksRUFBRSxnQkFBZ0IscUVBQXFFLEVBQUUsaUJBQWlCLCtMQUErTCxnSkFBZ0osNlBBQTZQLDZGQUE2RixHQUFHLGVBQWUsRSIsImZpbGUiOiJzdGF0aWMvY2h1bmsvOWU3MjI3ZDRlMDNiMjMyYjc3Y2UuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHtcInNldHRpbmdcIjp7XCJ0aXRsZVwiOlwi5LiL5ouJ6I+c5Y2VXCIsXCJjYXRlZ29yeVwiOlwi57uE5Lu2XCIsXCJvcmRlclwiOjB9LFwiY2F0YWxvZ3NcIjpbXSxcImNvbnRlbnRzXCI6XCI8YmxvY2txdW90ZT5cXG48cD48Y29kZT5rcGMvY29tcG9uZW50L2Ryb3Bkb3duPC9jb2RlPuaatOmcsuWHuuadpeeahOW5tumdnjxjb2RlPkRyb3Bkb3duPC9jb2RlPue7hOS7tuacrOi6q++8jOiAjOaYr+WMheijheivpee7hOS7tueahOWHveaVsO+8iHZkdOS4reensOS9nOWuj+WHveaVsO+8ieaJgOS7peS4jeimgeivleWbvue7p+aJv+Wug+OAgjwvcD5cXG48L2Jsb2NrcXVvdGU+XFxuPGgxIGlkPSdoZWFkZXItJUU1JUIxJTlFJUU2JTgwJUE3Jz7lsZ7mgKc8L2gxPjxoMiBpZD0naGVhZGVyLURyb3Bkb3duJz5Ecm9wZG93bjwvaDI+PGRpdiBjbGFzcz1cXFwiay10YWJsZS13cmFwcGVyIGstYm9yZGVyXFxcIj5cXG4gICAgICAgICAgICAgICAgICAgIDx0YWJsZSBjbGFzcz1cXFwiay10YWJsZVxcXCI+XFxuICAgICAgICAgICAgICAgICAgICAgICAgPHRoZWFkPjx0cj5cXG48dGg+5bGe5oCnPC90aD5cXG48dGg+6K+05piOPC90aD5cXG48dGg+57G75Z6LPC90aD5cXG48dGg+6buY6K6k5YC8PC90aD5cXG48L3RyPlxcbjwvdGhlYWQ+XFxuICAgICAgICAgICAgICAgICAgICAgICAgPHRib2R5Pjx0cj5cXG48dGQ+dHJpZ2dlcjwvdGQ+XFxuPHRkPuinpuWPkeaWueW8j++8jDxjb2RlPmhvdmVyPC9jb2RlPuS4uuaCrOWBnOinpuWPke+8jDxjb2RlPmNsaWNrPC9jb2RlPuS4uueCueWHu+inpuWPkTwvdGQ+XFxuPHRkPjxjb2RlPiZxdW90O2hvdmVyJnF1b3Q7PC9jb2RlPiAmIzEyNDsgPGNvZGU+JnF1b3Q7Y2xpY2smcXVvdDs8L2NvZGU+PC90ZD5cXG48dGQ+PGNvZGU+JnF1b3Q7aG92ZXImcXVvdDs8L2NvZGU+PC90ZD5cXG48L3RyPlxcbjx0cj5cXG48dGQ+ZGlzYWJsZWQ8L3RkPlxcbjx0ZD7mmK/lkKbnpoHnlKjmlbTkuKroj5zljZU8L3RkPlxcbjx0ZD48Y29kZT5Cb29sZWFuPC9jb2RlPjwvdGQ+XFxuPHRkPjxjb2RlPmZhbHNlPC9jb2RlPjwvdGQ+XFxuPC90cj5cXG48dHI+XFxuPHRkPnBvc2l0aW9uPC90ZD5cXG48dGQ+6I+c5Y2V5by55Ye655qE5L2N572u77yM6buY6K6k5Zyo6Kem5Y+R5Zmo5q2j5LiL5pa55ZCR5LiL5YGP56e7PGNvZGU+NXB4PC9jb2RlPueahOWcsOaWuTwvdGQ+XFxuPHRkPjxjb2RlPk9iamVjdDwvY29kZT48L3RkPlxcbjx0ZD48Y29kZT57bXk6ICYjMzk7Y2VudGVyIHRvcCs1JiMzOTssICYjMzk7Y2VudGVyIGJvdHRvbSYjMzk7fTwvY29kZT48L3RkPlxcbjwvdHI+XFxuPC90Ym9keT5cXG4gICAgICAgICAgICAgICAgICAgIDwvdGFibGU+XFxuICAgICAgICAgICAgICAgIDwvZGl2PjxoMiBpZD0naGVhZGVyLURyb3Bkb3duSXRlbSc+RHJvcGRvd25JdGVtPC9oMj48ZGl2IGNsYXNzPVxcXCJrLXRhYmxlLXdyYXBwZXIgay1ib3JkZXJcXFwiPlxcbiAgICAgICAgICAgICAgICAgICAgPHRhYmxlIGNsYXNzPVxcXCJrLXRhYmxlXFxcIj5cXG4gICAgICAgICAgICAgICAgICAgICAgICA8dGhlYWQ+PHRyPlxcbjx0aD7lsZ7mgKc8L3RoPlxcbjx0aD7or7TmmI48L3RoPlxcbjx0aD7nsbvlnos8L3RoPlxcbjx0aD7pu5jorqTlgLw8L3RoPlxcbjwvdHI+XFxuPC90aGVhZD5cXG4gICAgICAgICAgICAgICAgICAgICAgICA8dGJvZHk+PHRyPlxcbjx0ZD5kaXNhYmxlZDwvdGQ+XFxuPHRkPuaYr+WQpuemgeeUqOivpeiPnOWNlemhuTwvdGQ+XFxuPHRkPjxjb2RlPkJvb2xlYW48L2NvZGU+PC90ZD5cXG48dGQ+PGNvZGU+ZmFsc2U8L2NvZGU+PC90ZD5cXG48L3RyPlxcbjx0cj5cXG48dGQ+aGlkZU9uU2VsZWN0PC90ZD5cXG48dGQ+5piv5ZCm6YCJ5Lit6K+l6I+c5Y2V5ZCO6ZqQ6JeP5pW05Liq6I+c5Y2VPC90ZD5cXG48dGQ+PGNvZGU+Qm9vbGVhbjwvY29kZT48L3RkPlxcbjx0ZD48Y29kZT50cnVlPC9jb2RlPjwvdGQ+XFxuPC90cj5cXG48L3Rib2R5PlxcbiAgICAgICAgICAgICAgICAgICAgPC90YWJsZT5cXG4gICAgICAgICAgICAgICAgPC9kaXY+PGgyIGlkPSdoZWFkZXItJUU0JUJBJThCJUU0JUJCJUI2Jz7kuovku7Y8L2gyPjxoMiBpZD0naGVhZGVyLURyb3Bkb3duSXRlbSc+RHJvcGRvd25JdGVtPC9oMj48ZGl2IGNsYXNzPVxcXCJrLXRhYmxlLXdyYXBwZXIgay1ib3JkZXJcXFwiPlxcbiAgICAgICAgICAgICAgICAgICAgPHRhYmxlIGNsYXNzPVxcXCJrLXRhYmxlXFxcIj5cXG4gICAgICAgICAgICAgICAgICAgICAgICA8dGhlYWQ+PHRyPlxcbjx0aD7kuovku7blkI08L3RoPlxcbjx0aD7or7TmmI48L3RoPlxcbjx0aD7lj4LmlbA8L3RoPlxcbjwvdHI+XFxuPC90aGVhZD5cXG4gICAgICAgICAgICAgICAgICAgICAgICA8dGJvZHk+PHRyPlxcbjx0ZD5zZWxlY3Q8L3RkPlxcbjx0ZD7oj5zljZXpobnooqvpgInkuK3ml7bop6blj5HvvIzkuI3nrqHmmK/ngrnlh7vov5jmmK/plK7nm5jmk43kvZzpgInkuK08L3RkPlxcbjx0ZD7ooqvpgInkuK3nmoQ8Y29kZT5Ecm9wZG93bkl0ZW08L2NvZGU+5a6e5L6LPC90ZD5cXG48L3RyPlxcbjx0cj5cXG48dGQ+Y2xpY2s8L3RkPlxcbjx0ZD7oj5zljZXpobnooqvngrnlh7vml7bop6blj5E8L3RkPlxcbjx0ZD48Y29kZT5FdmVudDwvY29kZT48L3RkPlxcbjwvdHI+XFxuPHRyPlxcbjx0ZD5tb3VzZWVudGVyPC90ZD5cXG48dGQ+6byg5qCH6L+b5YWl6I+c5Y2V6aG55pe26Kem5Y+RPC90ZD5cXG48dGQ+PGNvZGU+RXZlbnQ8L2NvZGU+PC90ZD5cXG48L3RyPlxcbjx0cj5cXG48dGQ+bW91c2VsZWF2ZTwvdGQ+XFxuPHRkPum8oOagh+emu+W8gOiPnOWNlemhueaXtuinpuWPkTwvdGQ+XFxuPHRkPjxjb2RlPkV2ZW50PC9jb2RlPjwvdGQ+XFxuPC90cj5cXG48L3Rib2R5PlxcbiAgICAgICAgICAgICAgICAgICAgPC90YWJsZT5cXG4gICAgICAgICAgICAgICAgPC9kaXY+XCIsXCJjb2Rlc1wiOlt7XCJsYW5ndWFnZVwiOlwianNcIixcImNvbnRlbnRcIjpcImltcG9ydCBJbnRhY3QgZnJvbSAnaW50YWN0JztcXG5pbXBvcnQgdGVtcGxhdGUgZnJvbSAnLi9pbmRleC52ZHQnO1xcblxcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIGV4dGVuZHMgSW50YWN0IHtcXG4gICAgQEludGFjdC50ZW1wbGF0ZSgpXFxuICAgIHN0YXRpYyB0ZW1wbGF0ZSA9IHRlbXBsYXRlO1xcbn1cIn1dLFwiaW5kZXhcIjozMixcInNpZGVCYXJzXCI6e1wi57uE5Lu2XCI6W3tcInRpdGxlXCI6XCLpnaLljIXlsZFcIixcInBhdGhcIjpcImNvbXBvbmVudHMvYnJlYWRjcnVtYi9pbmRleC5tZFwiLFwiY2hpbGRyZW5cIjpbe1widGl0bGVcIjpcIuWxnuaAp1wiLFwicGF0aFwiOlwiI2hlYWRlci0lRTUlQjElOUUlRTYlODAlQTdcIixcImxldmVsXCI6MSxcImNvbnRlbnRcIjpcIjxoMSBpZD0naGVhZGVyLSVFNSVCMSU5RSVFNiU4MCVBNyc+5bGe5oCnPC9oMT5cIixcInRleHRcIjpcIuWxnuaAp1wiLFwiY2hpbGRyZW5cIjpbe1widGl0bGVcIjpcIkJyZWFkY3J1bWJcIixcInBhdGhcIjpcIiNoZWFkZXItQnJlYWRjcnVtYlwiLFwibGV2ZWxcIjoyLFwiY29udGVudFwiOlwiPGgyIGlkPSdoZWFkZXItQnJlYWRjcnVtYic+QnJlYWRjcnVtYjwvaDI+XCIsXCJ0ZXh0XCI6XCJCcmVhZGNydW1iXCIsXCJjaGlsZHJlblwiOltdfSx7XCJ0aXRsZVwiOlwiQnJlYWRjcnVtYkl0ZW1cIixcInBhdGhcIjpcIiNoZWFkZXItQnJlYWRjcnVtYkl0ZW1cIixcImxldmVsXCI6MixcImNvbnRlbnRcIjpcIjxoMiBpZD0naGVhZGVyLUJyZWFkY3J1bWJJdGVtJz5CcmVhZGNydW1iSXRlbTwvaDI+XCIsXCJ0ZXh0XCI6XCJCcmVhZGNydW1iSXRlbVwiLFwiY2hpbGRyZW5cIjpbXX1dfV19LHtcInRpdGxlXCI6XCLmjInpkq5cIixcInBhdGhcIjpcImNvbXBvbmVudHMvYnV0dG9uL2luZGV4Lm1kXCIsXCJjaGlsZHJlblwiOlt7XCJ0aXRsZVwiOlwi5bGe5oCnXCIsXCJwYXRoXCI6XCIjaGVhZGVyLSVFNSVCMSU5RSVFNiU4MCVBN1wiLFwibGV2ZWxcIjoxLFwiY29udGVudFwiOlwiPGgxIGlkPSdoZWFkZXItJUU1JUIxJTlFJUU2JTgwJUE3Jz7lsZ7mgKc8L2gxPlwiLFwidGV4dFwiOlwi5bGe5oCnXCIsXCJjaGlsZHJlblwiOlt7XCJ0aXRsZVwiOlwiQnV0dG9uXCIsXCJwYXRoXCI6XCIjaGVhZGVyLUJ1dHRvblwiLFwibGV2ZWxcIjoyLFwiY29udGVudFwiOlwiPGgyIGlkPSdoZWFkZXItQnV0dG9uJz5CdXR0b248L2gyPlwiLFwidGV4dFwiOlwiQnV0dG9uXCIsXCJjaGlsZHJlblwiOltdfSx7XCJ0aXRsZVwiOlwiQnV0dG9uR3JvdXBcIixcInBhdGhcIjpcIiNoZWFkZXItQnV0dG9uR3JvdXBcIixcImxldmVsXCI6MixcImNvbnRlbnRcIjpcIjxoMiBpZD0naGVhZGVyLUJ1dHRvbkdyb3VwJz5CdXR0b25Hcm91cDwvaDI+XCIsXCJ0ZXh0XCI6XCJCdXR0b25Hcm91cFwiLFwiY2hpbGRyZW5cIjpbXX1dfSx7XCJ0aXRsZVwiOlwi5pa55rOVXCIsXCJwYXRoXCI6XCIjaGVhZGVyLSVFNiU5NiVCOSVFNiVCMyU5NVwiLFwibGV2ZWxcIjoxLFwiY29udGVudFwiOlwiPGgxIGlkPSdoZWFkZXItJUU2JTk2JUI5JUU2JUIzJTk1Jz7mlrnms5U8L2gxPlwiLFwidGV4dFwiOlwi5pa55rOVXCIsXCJjaGlsZHJlblwiOlt7XCJ0aXRsZVwiOlwiQnV0dG9uXCIsXCJwYXRoXCI6XCIjaGVhZGVyLUJ1dHRvblwiLFwibGV2ZWxcIjoyLFwiY29udGVudFwiOlwiPGgyIGlkPSdoZWFkZXItQnV0dG9uJz5CdXR0b248L2gyPlwiLFwidGV4dFwiOlwiQnV0dG9uXCIsXCJjaGlsZHJlblwiOltdfV19XX0se1widGl0bGVcIjpcIuWkjemAieahhlwiLFwicGF0aFwiOlwiY29tcG9uZW50cy9jaGVja2JveC9pbmRleC5tZFwiLFwiY2hpbGRyZW5cIjpbe1widGl0bGVcIjpcIuWxnuaAp1wiLFwicGF0aFwiOlwiI2hlYWRlci0lRTUlQjElOUUlRTYlODAlQTdcIixcImxldmVsXCI6MSxcImNvbnRlbnRcIjpcIjxoMSBpZD0naGVhZGVyLSVFNSVCMSU5RSVFNiU4MCVBNyc+5bGe5oCnPC9oMT5cIixcInRleHRcIjpcIuWxnuaAp1wiLFwiY2hpbGRyZW5cIjpbXX1dfSx7XCJ0aXRsZVwiOlwi5pel5pyf6YCJ5oupXCIsXCJwYXRoXCI6XCJjb21wb25lbnRzL2RhdGVwaWNrZXIvaW5kZXgubWRcIixcImNoaWxkcmVuXCI6W3tcInRpdGxlXCI6XCLlsZ7mgKdcIixcInBhdGhcIjpcIiNoZWFkZXItJUU1JUIxJTlFJUU2JTgwJUE3XCIsXCJsZXZlbFwiOjEsXCJjb250ZW50XCI6XCI8aDEgaWQ9J2hlYWRlci0lRTUlQjElOUUlRTYlODAlQTcnPuWxnuaApzwvaDE+XCIsXCJ0ZXh0XCI6XCLlsZ7mgKdcIixcImNoaWxkcmVuXCI6W119XX0se1widGl0bGVcIjpcIuW8ueeql1wiLFwicGF0aFwiOlwiY29tcG9uZW50cy9kaWFsb2cvaW5kZXgubWRcIixcImNoaWxkcmVuXCI6W3tcInRpdGxlXCI6XCLlsZ7mgKdcIixcInBhdGhcIjpcIiNoZWFkZXItJUU1JUIxJTlFJUU2JTgwJUE3XCIsXCJsZXZlbFwiOjEsXCJjb250ZW50XCI6XCI8aDEgaWQ9J2hlYWRlci0lRTUlQjElOUUlRTYlODAlQTcnPuWxnuaApzwvaDE+XCIsXCJ0ZXh0XCI6XCLlsZ7mgKdcIixcImNoaWxkcmVuXCI6W119LHtcInRpdGxlXCI6XCLmianlsZXngrlcIixcInBhdGhcIjpcIiNoZWFkZXItJUU2JTg5JUE5JUU1JUIxJTk1JUU3JTgyJUI5XCIsXCJsZXZlbFwiOjEsXCJjb250ZW50XCI6XCI8aDEgaWQ9J2hlYWRlci0lRTYlODklQTklRTUlQjElOTUlRTclODIlQjknPuaJqeWxleeCuTwvaDE+XCIsXCJ0ZXh0XCI6XCLmianlsZXngrlcIixcImNoaWxkcmVuXCI6W119LHtcInRpdGxlXCI6XCLmlrnms5VcIixcInBhdGhcIjpcIiNoZWFkZXItJUU2JTk2JUI5JUU2JUIzJTk1XCIsXCJsZXZlbFwiOjEsXCJjb250ZW50XCI6XCI8aDEgaWQ9J2hlYWRlci0lRTYlOTYlQjklRTYlQjMlOTUnPuaWueazlTwvaDE+XCIsXCJ0ZXh0XCI6XCLmlrnms5VcIixcImNoaWxkcmVuXCI6W119LHtcInRpdGxlXCI6XCLkuovku7ZcIixcInBhdGhcIjpcIiNoZWFkZXItJUU0JUJBJThCJUU0JUJCJUI2XCIsXCJsZXZlbFwiOjEsXCJjb250ZW50XCI6XCI8aDEgaWQ9J2hlYWRlci0lRTQlQkElOEIlRTQlQkIlQjYnPuS6i+S7tjwvaDE+XCIsXCJ0ZXh0XCI6XCLkuovku7ZcIixcImNoaWxkcmVuXCI6W119XX0se1widGl0bGVcIjpcIuS4i+aLieiPnOWNlVwiLFwicGF0aFwiOlwiY29tcG9uZW50cy9kcm9wZG93bi9pbmRleC5tZFwiLFwiY2hpbGRyZW5cIjpbe1widGl0bGVcIjpcIuWxnuaAp1wiLFwicGF0aFwiOlwiI2hlYWRlci0lRTUlQjElOUUlRTYlODAlQTdcIixcImxldmVsXCI6MSxcImNvbnRlbnRcIjpcIjxoMSBpZD0naGVhZGVyLSVFNSVCMSU5RSVFNiU4MCVBNyc+5bGe5oCnPC9oMT5cIixcInRleHRcIjpcIuWxnuaAp1wiLFwiY2hpbGRyZW5cIjpbe1widGl0bGVcIjpcIkRyb3Bkb3duXCIsXCJwYXRoXCI6XCIjaGVhZGVyLURyb3Bkb3duXCIsXCJsZXZlbFwiOjIsXCJjb250ZW50XCI6XCI8aDIgaWQ9J2hlYWRlci1Ecm9wZG93bic+RHJvcGRvd248L2gyPlwiLFwidGV4dFwiOlwiRHJvcGRvd25cIixcImNoaWxkcmVuXCI6W119LHtcInRpdGxlXCI6XCJEcm9wZG93bkl0ZW1cIixcInBhdGhcIjpcIiNoZWFkZXItRHJvcGRvd25JdGVtXCIsXCJsZXZlbFwiOjIsXCJjb250ZW50XCI6XCI8aDIgaWQ9J2hlYWRlci1Ecm9wZG93bkl0ZW0nPkRyb3Bkb3duSXRlbTwvaDI+XCIsXCJ0ZXh0XCI6XCJEcm9wZG93bkl0ZW1cIixcImNoaWxkcmVuXCI6W119LHtcInRpdGxlXCI6XCLkuovku7ZcIixcInBhdGhcIjpcIiNoZWFkZXItJUU0JUJBJThCJUU0JUJCJUI2XCIsXCJsZXZlbFwiOjIsXCJjb250ZW50XCI6XCI8aDIgaWQ9J2hlYWRlci0lRTQlQkElOEIlRTQlQkIlQjYnPuS6i+S7tjwvaDI+XCIsXCJ0ZXh0XCI6XCLkuovku7ZcIixcImNoaWxkcmVuXCI6W119LHtcInRpdGxlXCI6XCJEcm9wZG93bkl0ZW1cIixcInBhdGhcIjpcIiNoZWFkZXItRHJvcGRvd25JdGVtXCIsXCJsZXZlbFwiOjIsXCJjb250ZW50XCI6XCI8aDIgaWQ9J2hlYWRlci1Ecm9wZG93bkl0ZW0nPkRyb3Bkb3duSXRlbTwvaDI+XCIsXCJ0ZXh0XCI6XCJEcm9wZG93bkl0ZW1cIixcImNoaWxkcmVuXCI6W119XX1dfSx7XCJ0aXRsZVwiOlwi5Y+v57yW6L6R5paH5pysXCIsXCJwYXRoXCI6XCJjb21wb25lbnRzL2VkaXRhYmxlL2luZGV4Lm1kXCIsXCJjaGlsZHJlblwiOlt7XCJ0aXRsZVwiOlwi5bGe5oCnXCIsXCJwYXRoXCI6XCIjaGVhZGVyLSVFNSVCMSU5RSVFNiU4MCVBN1wiLFwibGV2ZWxcIjoxLFwiY29udGVudFwiOlwiPGgxIGlkPSdoZWFkZXItJUU1JUIxJTlFJUU2JTgwJUE3Jz7lsZ7mgKc8L2gxPlwiLFwidGV4dFwiOlwi5bGe5oCnXCIsXCJjaGlsZHJlblwiOltdfSx7XCJ0aXRsZVwiOlwi5LqL5Lu2XCIsXCJwYXRoXCI6XCIjaGVhZGVyLSVFNCVCQSU4QiVFNCVCQiVCNlwiLFwibGV2ZWxcIjoxLFwiY29udGVudFwiOlwiPGgxIGlkPSdoZWFkZXItJUU0JUJBJThCJUU0JUJCJUI2Jz7kuovku7Y8L2gxPlwiLFwidGV4dFwiOlwi5LqL5Lu2XCIsXCJjaGlsZHJlblwiOltdfV19LHtcInRpdGxlXCI6XCLooajljZVcIixcInBhdGhcIjpcImNvbXBvbmVudHMvZm9ybS9pbmRleC5tZFwiLFwiY2hpbGRyZW5cIjpbe1widGl0bGVcIjpcIuWxnuaAp1wiLFwicGF0aFwiOlwiI2hlYWRlci0lRTUlQjElOUUlRTYlODAlQTdcIixcImxldmVsXCI6MSxcImNvbnRlbnRcIjpcIjxoMSBpZD0naGVhZGVyLSVFNSVCMSU5RSVFNiU4MCVBNyc+5bGe5oCnPC9oMT5cIixcInRleHRcIjpcIuWxnuaAp1wiLFwiY2hpbGRyZW5cIjpbe1widGl0bGVcIjpcIkZvcm1JdGVtXCIsXCJwYXRoXCI6XCIjaGVhZGVyLUZvcm1JdGVtXCIsXCJsZXZlbFwiOjIsXCJjb250ZW50XCI6XCI8aDIgaWQ9J2hlYWRlci1Gb3JtSXRlbSc+Rm9ybUl0ZW08L2gyPlwiLFwidGV4dFwiOlwiRm9ybUl0ZW1cIixcImNoaWxkcmVuXCI6W119XX0se1widGl0bGVcIjpcIuaJqeWxleeCuVwiLFwicGF0aFwiOlwiI2hlYWRlci0lRTYlODklQTklRTUlQjElOTUlRTclODIlQjlcIixcImxldmVsXCI6MSxcImNvbnRlbnRcIjpcIjxoMSBpZD0naGVhZGVyLSVFNiU4OSVBOSVFNSVCMSU5NSVFNyU4MiVCOSc+5omp5bGV54K5PC9oMT5cIixcInRleHRcIjpcIuaJqeWxleeCuVwiLFwiY2hpbGRyZW5cIjpbe1widGl0bGVcIjpcIkZvcm1JdGVtXCIsXCJwYXRoXCI6XCIjaGVhZGVyLUZvcm1JdGVtXCIsXCJsZXZlbFwiOjIsXCJjb250ZW50XCI6XCI8aDIgaWQ9J2hlYWRlci1Gb3JtSXRlbSc+Rm9ybUl0ZW08L2gyPlwiLFwidGV4dFwiOlwiRm9ybUl0ZW1cIixcImNoaWxkcmVuXCI6W119XX0se1widGl0bGVcIjpcIuS6i+S7tlwiLFwicGF0aFwiOlwiI2hlYWRlci0lRTQlQkElOEIlRTQlQkIlQjZcIixcImxldmVsXCI6MSxcImNvbnRlbnRcIjpcIjxoMSBpZD0naGVhZGVyLSVFNCVCQSU4QiVFNCVCQiVCNic+5LqL5Lu2PC9oMT5cIixcInRleHRcIjpcIuS6i+S7tlwiLFwiY2hpbGRyZW5cIjpbe1widGl0bGVcIjpcIkZvcm1cIixcInBhdGhcIjpcIiNoZWFkZXItRm9ybVwiLFwibGV2ZWxcIjoyLFwiY29udGVudFwiOlwiPGgyIGlkPSdoZWFkZXItRm9ybSc+Rm9ybTwvaDI+XCIsXCJ0ZXh0XCI6XCJGb3JtXCIsXCJjaGlsZHJlblwiOltdfV19LHtcInRpdGxlXCI6XCLmlrnms5VcIixcInBhdGhcIjpcIiNoZWFkZXItJUU2JTk2JUI5JUU2JUIzJTk1XCIsXCJsZXZlbFwiOjEsXCJjb250ZW50XCI6XCI8aDEgaWQ9J2hlYWRlci0lRTYlOTYlQjklRTYlQjMlOTUnPuaWueazlTwvaDE+XCIsXCJ0ZXh0XCI6XCLmlrnms5VcIixcImNoaWxkcmVuXCI6W3tcInRpdGxlXCI6XCJGb3JtXCIsXCJwYXRoXCI6XCIjaGVhZGVyLUZvcm1cIixcImxldmVsXCI6MixcImNvbnRlbnRcIjpcIjxoMiBpZD0naGVhZGVyLUZvcm0nPkZvcm08L2gyPlwiLFwidGV4dFwiOlwiRm9ybVwiLFwiY2hpbGRyZW5cIjpbXX1dfSx7XCJ0aXRsZVwiOlwi6Z2Z5oCB5pa55rOVXCIsXCJwYXRoXCI6XCIjaGVhZGVyLSVFOSU5RCU5OSVFNiU4MCU4MSVFNiU5NiVCOSVFNiVCMyU5NVwiLFwibGV2ZWxcIjoxLFwiY29udGVudFwiOlwiPGgxIGlkPSdoZWFkZXItJUU5JTlEJTk5JUU2JTgwJTgxJUU2JTk2JUI5JUU2JUIzJTk1Jz7pnZnmgIHmlrnms5U8L2gxPlwiLFwidGV4dFwiOlwi6Z2Z5oCB5pa55rOVXCIsXCJjaGlsZHJlblwiOlt7XCJ0aXRsZVwiOlwiRm9ybVwiLFwicGF0aFwiOlwiI2hlYWRlci1Gb3JtXCIsXCJsZXZlbFwiOjIsXCJjb250ZW50XCI6XCI8aDIgaWQ9J2hlYWRlci1Gb3JtJz5Gb3JtPC9oMj5cIixcInRleHRcIjpcIkZvcm1cIixcImNoaWxkcmVuXCI6W119XX1dfSx7XCJ0aXRsZVwiOlwi5qCF5qC8XCIsXCJwYXRoXCI6XCJjb21wb25lbnRzL2dyaWQvaW5kZXgubWRcIixcImNoaWxkcmVuXCI6W3tcInRpdGxlXCI6XCLlsZ7mgKdcIixcInBhdGhcIjpcIiNoZWFkZXItJUU1JUIxJTlFJUU2JTgwJUE3XCIsXCJsZXZlbFwiOjEsXCJjb250ZW50XCI6XCI8aDEgaWQ9J2hlYWRlci0lRTUlQjElOUUlRTYlODAlQTcnPuWxnuaApzwvaDE+XCIsXCJ0ZXh0XCI6XCLlsZ7mgKdcIixcImNoaWxkcmVuXCI6W3tcInRpdGxlXCI6XCJSb3dcIixcInBhdGhcIjpcIiNoZWFkZXItUm93XCIsXCJsZXZlbFwiOjIsXCJjb250ZW50XCI6XCI8aDIgaWQ9J2hlYWRlci1Sb3cnPlJvdzwvaDI+XCIsXCJ0ZXh0XCI6XCJSb3dcIixcImNoaWxkcmVuXCI6W119LHtcInRpdGxlXCI6XCJDb2xcIixcInBhdGhcIjpcIiNoZWFkZXItQ29sXCIsXCJsZXZlbFwiOjIsXCJjb250ZW50XCI6XCI8aDIgaWQ9J2hlYWRlci1Db2wnPkNvbDwvaDI+XCIsXCJ0ZXh0XCI6XCJDb2xcIixcImNoaWxkcmVuXCI6W119XX1dfSx7XCJ0aXRsZVwiOlwi6L6T5YWl5qGGXCIsXCJwYXRoXCI6XCJjb21wb25lbnRzL2lucHV0L2luZGV4Lm1kXCIsXCJjaGlsZHJlblwiOlt7XCJ0aXRsZVwiOlwi5bGe5oCnXCIsXCJwYXRoXCI6XCIjaGVhZGVyLSVFNSVCMSU5RSVFNiU4MCVBN1wiLFwibGV2ZWxcIjoxLFwiY29udGVudFwiOlwiPGgxIGlkPSdoZWFkZXItJUU1JUIxJTlFJUU2JTgwJUE3Jz7lsZ7mgKc8L2gxPlwiLFwidGV4dFwiOlwi5bGe5oCnXCIsXCJjaGlsZHJlblwiOltdfSx7XCJ0aXRsZVwiOlwi5omp5bGV54K5XCIsXCJwYXRoXCI6XCIjaGVhZGVyLSVFNiU4OSVBOSVFNSVCMSU5NSVFNyU4MiVCOVwiLFwibGV2ZWxcIjoxLFwiY29udGVudFwiOlwiPGgxIGlkPSdoZWFkZXItJUU2JTg5JUE5JUU1JUIxJTk1JUU3JTgyJUI5Jz7mianlsZXngrk8L2gxPlwiLFwidGV4dFwiOlwi5omp5bGV54K5XCIsXCJjaGlsZHJlblwiOltdfSx7XCJ0aXRsZVwiOlwi5LqL5Lu2XCIsXCJwYXRoXCI6XCIjaGVhZGVyLSVFNCVCQSU4QiVFNCVCQiVCNlwiLFwibGV2ZWxcIjoxLFwiY29udGVudFwiOlwiPGgxIGlkPSdoZWFkZXItJUU0JUJBJThCJUU0JUJCJUI2Jz7kuovku7Y8L2gxPlwiLFwidGV4dFwiOlwi5LqL5Lu2XCIsXCJjaGlsZHJlblwiOltdfV19LHtcInRpdGxlXCI6XCLlhajlsYDmj5DnpLpcIixcInBhdGhcIjpcImNvbXBvbmVudHMvbWVzc2FnZS9pbmRleC5tZFwiLFwiY2hpbGRyZW5cIjpbe1widGl0bGVcIjpcIuWxnuaAp1wiLFwicGF0aFwiOlwiI2hlYWRlci0lRTUlQjElOUUlRTYlODAlQTdcIixcImxldmVsXCI6MSxcImNvbnRlbnRcIjpcIjxoMSBpZD0naGVhZGVyLSVFNSVCMSU5RSVFNiU4MCVBNyc+5bGe5oCnPC9oMT5cIixcInRleHRcIjpcIuWxnuaAp1wiLFwiY2hpbGRyZW5cIjpbXX0se1widGl0bGVcIjpcIumdmeaAgeaWueazlVwiLFwicGF0aFwiOlwiI2hlYWRlci0lRTklOUQlOTklRTYlODAlODElRTYlOTYlQjklRTYlQjMlOTVcIixcImxldmVsXCI6MSxcImNvbnRlbnRcIjpcIjxoMSBpZD0naGVhZGVyLSVFOSU5RCU5OSVFNiU4MCU4MSVFNiU5NiVCOSVFNiVCMyU5NSc+6Z2Z5oCB5pa55rOVPC9oMT5cIixcInRleHRcIjpcIumdmeaAgeaWueazlVwiLFwiY2hpbGRyZW5cIjpbXX1dfSx7XCJ0aXRsZVwiOlwi5YiG6aG1XCIsXCJwYXRoXCI6XCJjb21wb25lbnRzL3BhZ2luYXRpb24vaW5kZXgubWRcIixcImNoaWxkcmVuXCI6W3tcInRpdGxlXCI6XCLlsZ7mgKdcIixcInBhdGhcIjpcIiNoZWFkZXItJUU1JUIxJTlFJUU2JTgwJUE3XCIsXCJsZXZlbFwiOjEsXCJjb250ZW50XCI6XCI8aDEgaWQ9J2hlYWRlci0lRTUlQjElOUUlRTYlODAlQTcnPuWxnuaApzwvaDE+XCIsXCJ0ZXh0XCI6XCLlsZ7mgKdcIixcImNoaWxkcmVuXCI6W119LHtcInRpdGxlXCI6XCLmlrnms5VcIixcInBhdGhcIjpcIiNoZWFkZXItJUU2JTk2JUI5JUU2JUIzJTk1XCIsXCJsZXZlbFwiOjEsXCJjb250ZW50XCI6XCI8aDEgaWQ9J2hlYWRlci0lRTYlOTYlQjklRTYlQjMlOTUnPuaWueazlTwvaDE+XCIsXCJ0ZXh0XCI6XCLmlrnms5VcIixcImNoaWxkcmVuXCI6W3tcInRpdGxlXCI6XCJQYWdpbmF0aW9uXCIsXCJwYXRoXCI6XCIjaGVhZGVyLVBhZ2luYXRpb25cIixcImxldmVsXCI6MixcImNvbnRlbnRcIjpcIjxoMiBpZD0naGVhZGVyLVBhZ2luYXRpb24nPlBhZ2luYXRpb248L2gyPlwiLFwidGV4dFwiOlwiUGFnaW5hdGlvblwiLFwiY2hpbGRyZW5cIjpbXX1dfV19LHtcInRpdGxlXCI6XCLov5vluqbmnaFcIixcInBhdGhcIjpcImNvbXBvbmVudHMvcHJvZ3Jlc3MvaW5kZXgubWRcIixcImNoaWxkcmVuXCI6W3tcInRpdGxlXCI6XCLlsZ7mgKdcIixcInBhdGhcIjpcIiNoZWFkZXItJUU1JUIxJTlFJUU2JTgwJUE3XCIsXCJsZXZlbFwiOjEsXCJjb250ZW50XCI6XCI8aDEgaWQ9J2hlYWRlci0lRTUlQjElOUUlRTYlODAlQTcnPuWxnuaApzwvaDE+XCIsXCJ0ZXh0XCI6XCLlsZ7mgKdcIixcImNoaWxkcmVuXCI6W119XX0se1widGl0bGVcIjpcIuWNlemAieahhlwiLFwicGF0aFwiOlwiY29tcG9uZW50cy9yYWRpby9pbmRleC5tZFwiLFwiY2hpbGRyZW5cIjpbe1widGl0bGVcIjpcIuWxnuaAp1wiLFwicGF0aFwiOlwiI2hlYWRlci0lRTUlQjElOUUlRTYlODAlQTdcIixcImxldmVsXCI6MSxcImNvbnRlbnRcIjpcIjxoMSBpZD0naGVhZGVyLSVFNSVCMSU5RSVFNiU4MCVBNyc+5bGe5oCnPC9oMT5cIixcInRleHRcIjpcIuWxnuaAp1wiLFwiY2hpbGRyZW5cIjpbXX1dfSx7XCJ0aXRsZVwiOlwi6YCJ5oup5qGGXCIsXCJwYXRoXCI6XCJjb21wb25lbnRzL3NlbGVjdC9pbmRleC5tZFwiLFwiY2hpbGRyZW5cIjpbe1widGl0bGVcIjpcIuWxnuaAp1wiLFwicGF0aFwiOlwiI2hlYWRlci0lRTUlQjElOUUlRTYlODAlQTdcIixcImxldmVsXCI6MSxcImNvbnRlbnRcIjpcIjxoMSBpZD0naGVhZGVyLSVFNSVCMSU5RSVFNiU4MCVBNyc+5bGe5oCnPC9oMT5cIixcInRleHRcIjpcIuWxnuaAp1wiLFwiY2hpbGRyZW5cIjpbe1widGl0bGVcIjpcIlNlbGVjdFwiLFwicGF0aFwiOlwiI2hlYWRlci1TZWxlY3RcIixcImxldmVsXCI6MixcImNvbnRlbnRcIjpcIjxoMiBpZD0naGVhZGVyLVNlbGVjdCc+U2VsZWN0PC9oMj5cIixcInRleHRcIjpcIlNlbGVjdFwiLFwiY2hpbGRyZW5cIjpbXX0se1widGl0bGVcIjpcIk9wdGlvblwiLFwicGF0aFwiOlwiI2hlYWRlci1PcHRpb25cIixcImxldmVsXCI6MixcImNvbnRlbnRcIjpcIjxoMiBpZD0naGVhZGVyLU9wdGlvbic+T3B0aW9uPC9oMj5cIixcInRleHRcIjpcIk9wdGlvblwiLFwiY2hpbGRyZW5cIjpbXX1dfV19LHtcInRpdGxlXCI6XCLmu5HlnZdcIixcInBhdGhcIjpcImNvbXBvbmVudHMvc2xpZGVyL2luZGV4Lm1kXCIsXCJjaGlsZHJlblwiOlt7XCJ0aXRsZVwiOlwi5bGe5oCnXCIsXCJwYXRoXCI6XCIjaGVhZGVyLSVFNSVCMSU5RSVFNiU4MCVBN1wiLFwibGV2ZWxcIjoxLFwiY29udGVudFwiOlwiPGgxIGlkPSdoZWFkZXItJUU1JUIxJTlFJUU2JTgwJUE3Jz7lsZ7mgKc8L2gxPlwiLFwidGV4dFwiOlwi5bGe5oCnXCIsXCJjaGlsZHJlblwiOltdfV19LHtcInRpdGxlXCI6XCLmlbDlrZfovpPlhaXmoYZcIixcInBhdGhcIjpcImNvbXBvbmVudHMvc3Bpbm5lci9pbmRleC5tZFwiLFwiY2hpbGRyZW5cIjpbe1widGl0bGVcIjpcIuWxnuaAp1wiLFwicGF0aFwiOlwiI2hlYWRlci0lRTUlQjElOUUlRTYlODAlQTdcIixcImxldmVsXCI6MSxcImNvbnRlbnRcIjpcIjxoMSBpZD0naGVhZGVyLSVFNSVCMSU5RSVFNiU4MCVBNyc+5bGe5oCnPC9oMT5cIixcInRleHRcIjpcIuWxnuaAp1wiLFwiY2hpbGRyZW5cIjpbXX1dfSx7XCJ0aXRsZVwiOlwi5q2l6aqk5p2hXCIsXCJwYXRoXCI6XCJjb21wb25lbnRzL3N0ZXBzL2luZGV4Lm1kXCIsXCJjaGlsZHJlblwiOlt7XCJ0aXRsZVwiOlwi5bGe5oCnXCIsXCJwYXRoXCI6XCIjaGVhZGVyLSVFNSVCMSU5RSVFNiU4MCVBN1wiLFwibGV2ZWxcIjoxLFwiY29udGVudFwiOlwiPGgxIGlkPSdoZWFkZXItJUU1JUIxJTlFJUU2JTgwJUE3Jz7lsZ7mgKc8L2gxPlwiLFwidGV4dFwiOlwi5bGe5oCnXCIsXCJjaGlsZHJlblwiOlt7XCJ0aXRsZVwiOlwiU3RlcHNcIixcInBhdGhcIjpcIiNoZWFkZXItU3RlcHNcIixcImxldmVsXCI6MixcImNvbnRlbnRcIjpcIjxoMiBpZD0naGVhZGVyLVN0ZXBzJz5TdGVwczwvaDI+XCIsXCJ0ZXh0XCI6XCJTdGVwc1wiLFwiY2hpbGRyZW5cIjpbXX0se1widGl0bGVcIjpcIlN0ZXBcIixcInBhdGhcIjpcIiNoZWFkZXItU3RlcFwiLFwibGV2ZWxcIjoyLFwiY29udGVudFwiOlwiPGgyIGlkPSdoZWFkZXItU3RlcCc+U3RlcDwvaDI+XCIsXCJ0ZXh0XCI6XCJTdGVwXCIsXCJjaGlsZHJlblwiOltdfV19XX0se1widGl0bGVcIjpcIuihqOagvFwiLFwicGF0aFwiOlwiY29tcG9uZW50cy90YWJsZS9pbmRleC5tZFwiLFwiY2hpbGRyZW5cIjpbe1widGl0bGVcIjpcIuihqOagvOWxnuaApyBUYWJsZVwiLFwicGF0aFwiOlwiI2hlYWRlci0lRTglQTElQTglRTYlQTAlQkMlRTUlQjElOUUlRTYlODAlQTclMjBUYWJsZVwiLFwibGV2ZWxcIjoxLFwiY29udGVudFwiOlwiPGgxIGlkPSdoZWFkZXItJUU4JUExJUE4JUU2JUEwJUJDJUU1JUIxJTlFJUU2JTgwJUE3JTIwVGFibGUnPuihqOagvOWxnuaApyBUYWJsZTwvaDE+XCIsXCJ0ZXh0XCI6XCLooajmoLzlsZ7mgKcgVGFibGVcIixcImNoaWxkcmVuXCI6W119XX0se1widGl0bGVcIjpcIuepv+aireahhlwiLFwicGF0aFwiOlwiY29tcG9uZW50cy90cmFuc2Zlci9pbmRleC5tZFwiLFwiY2hpbGRyZW5cIjpbe1widGl0bGVcIjpcIuWxnuaAp1wiLFwicGF0aFwiOlwiI2hlYWRlci0lRTUlQjElOUUlRTYlODAlQTdcIixcImxldmVsXCI6MSxcImNvbnRlbnRcIjpcIjxoMSBpZD0naGVhZGVyLSVFNSVCMSU5RSVFNiU4MCVBNyc+5bGe5oCnPC9oMT5cIixcInRleHRcIjpcIuWxnuaAp1wiLFwiY2hpbGRyZW5cIjpbXX1dfV0sXCJ1bmRlZmluZWRcIjpbe1widGl0bGVcIjpcIuaMiemSruexu+Wei1wiLFwicGF0aFwiOlwiY29tcG9uZW50cy90YWJsZS9kZW1vL2Jhc2ljLm1kXCIsXCJjaGlsZHJlblwiOltdfV19LFwiaGlnaGxpZ2h0ZWRcIjpbe1wibGFuZ3VhZ2VcIjpcImpzXCIsXCJjb250ZW50XCI6XCI8cHJlPjxjb2RlIGNsYXNzPVxcXCJobGpzIGpzXFxcIj48c3BhbiBjbGFzcz1cXFwiaGxqcy1rZXl3b3JkXFxcIj5pbXBvcnQ8L3NwYW4+IEludGFjdCA8c3BhbiBjbGFzcz1cXFwiaGxqcy1rZXl3b3JkXFxcIj5mcm9tPC9zcGFuPiA8c3BhbiBjbGFzcz1cXFwiaGxqcy1zdHJpbmdcXFwiPidpbnRhY3QnPC9zcGFuPjtcXG48c3BhbiBjbGFzcz1cXFwiaGxqcy1rZXl3b3JkXFxcIj5pbXBvcnQ8L3NwYW4+IHRlbXBsYXRlIDxzcGFuIGNsYXNzPVxcXCJobGpzLWtleXdvcmRcXFwiPmZyb208L3NwYW4+IDxzcGFuIGNsYXNzPVxcXCJobGpzLXN0cmluZ1xcXCI+Jy4vaW5kZXgudmR0Jzwvc3Bhbj47XFxuXFxuPHNwYW4gY2xhc3M9XFxcImhsanMta2V5d29yZFxcXCI+ZXhwb3J0PC9zcGFuPiA8c3BhbiBjbGFzcz1cXFwiaGxqcy1rZXl3b3JkXFxcIj5kZWZhdWx0PC9zcGFuPiA8c3BhbiBjbGFzcz1cXFwiaGxqcy1jbGFzc1xcXCI+PHNwYW4gY2xhc3M9XFxcImhsanMta2V5d29yZFxcXCI+Y2xhc3M8L3NwYW4+IDxzcGFuIGNsYXNzPVxcXCJobGpzLWtleXdvcmRcXFwiPmV4dGVuZHM8L3NwYW4+IDxzcGFuIGNsYXNzPVxcXCJobGpzLXRpdGxlXFxcIj5JbnRhY3Q8L3NwYW4+IDwvc3Bhbj57XFxuICAgIEBJbnRhY3QudGVtcGxhdGUoKVxcbiAgICA8c3BhbiBjbGFzcz1cXFwiaGxqcy1rZXl3b3JkXFxcIj5zdGF0aWM8L3NwYW4+IHRlbXBsYXRlID0gdGVtcGxhdGU7XFxufTwvY29kZT48L3ByZT5cIn1dfVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc2l0ZS9jb21wb25lbnRzL2Ryb3Bkb3duL2luZGV4Lmpzb25cbi8vIG1vZHVsZSBpZCA9IC4vc2l0ZS9jb21wb25lbnRzL2Ryb3Bkb3duL2luZGV4Lmpzb25cbi8vIG1vZHVsZSBjaHVua3MgPSA2IDExNSJdLCJzb3VyY2VSb290IjoiIn0=