<div align="center">

<a href="https://ksc-fe.github.io/kpc/" rel="nofollow">
    <img src="/site/src/imgs/logo.png" alt="LOGO" width="150">
</a>

<p></p>

[![Build Status](https://travis-ci.org/ksc-fe/kpc.svg?branch=master)](https://travis-ci.org/ksc-fe/kpc)
[![Codecov](https://codecov.io/gh/ksc-fe/kpc/branch/master/graphs/badge.svg)](https://codecov.io/gh/ksc-fe/kpc/branch/master)
[![Average time to resolve an issue](http://isitmaintained.com/badge/resolution/ksc-fe/kpc.svg)](http://isitmaintained.com/project/ksc-fe/kpc "Average time to resolve an issue")
[![Percentage of issues still open](http://isitmaintained.com/badge/open/ksc-fe/kpc.svg)](http://isitmaintained.com/project/ksc-fe/kpc "Percentage of issues still open")

[![npm](https://img.shields.io/npm/dm/kpc.svg)](https://www.npmjs.com/package/kpc)
[![npm](https://img.shields.io/npm/v/kpc.svg)](https://www.npmjs.com/package/kpc)
[![gzip size: js](http://img.badgesize.io/ksc-fe/kpc/master/dist/kpc.min.js?compression=gzip&label=gzip%20size:%20js)](https://cdn.jsdelivr.net/npm/kpc/dist/)
[![gzip size: css](http://img.badgesize.io/ksc-fe/kpc/master/dist/kpc.css?compression=gzip&label=gzip%20size:%20css)](https://cdn.jsdelivr.net/npm/kpc/dist/)

</div>

## 动机

目前市面上已经存在大量组件库，我们为什么还要造这个轮子呢？下面我们解释下这个组件库开发的动机。

随着公司业务和团队的壮大，我们很难统一全公司的技术栈，或者也没有必要统一全公司技术栈。众所周知，
前端单页应用的开发无非基于3大框架：React/Vue/Angular。如果不同框架维护一套自己的组件库，一方面
维护成本非常高，存在大量重复劳动力；另一方面，即使大家都按统一的交互设计稿开发组件库，也很难保证
各个组件库交互和设计的完全统一。所以这时kpc应运而生，它存在的意义就是：同一套组件库适应不同框架
(Write once, run anywhere)

## 特性

* 支持多框架 [Intact][1] / [Vue][2] / [React][3]
* 完全可自定义的主题系统
* 360°全方位定位系统
* 声明式表单验证
* 完善的文档和单元测试 [文档](https://ksc-fe.github.io/kpc/)

## 安装

### 在Intact下

```shell
npm install intact kpc --save
```

### 在Vue下

```shell
npm install kpc intact intact-vue --save
```

webpack配置

```js
module.exports = {
    ...
    resolve: {
        alias: {
            'intact$': 'intact-vue',
        }
    }
}
```

### 在React下

```shell
npm install kpc intact intact-react --save
```

webpack配置

```js
module.exports = {
    ...
    resolve: {
        alias: {
            'intact$': 'intact-react',
        }
    }
}
```

## 使用

### 在Intact下

```js
import {Button} from 'kpc';

<Button>Hello</Button>
```

### 在Vue下

```js
<template>
    <Button>Hello</Button>
</template>
<script>
import {Button} from 'kpc';

export default {
    components: {
        Button
    }
}
</script>
```

### 在React下

```jsx
import React from 'react';
import {Button} from 'kpc';

class App extends React.Component {
    render() {
        return <Button>Hello</Button>
    }
}
```

## 链接

* [官方文档](https://ksc-fe.github.io/kpc/)
* [Intact MVVM框架][1]
* [Vdt 模板引擎](http://javey.github.io/vdt.js/)
* [Intact-Vue 兼容层](https://github.com/Javey/intact-vue)
* [Intact-React 兼容层](https://github.com/ksc-fe/intact-react)

## 常见问题

#### 1. 使用兼容层来兼容不同的框架，是否有性能损失？

性能损失非常小，因为兼容层并不会出来太多的东西，仅仅只是完成不同框架执行上下文的切换，唯一带来的损失
可能是框架需要引入兼容层和Intact底层库所带来的打包文件的增大，但只是增大了大概80KB(没有开启gzip)的体积，
相比目前前端项目动辄几M的打包文件，增大的并不多

#### 2. 兼容层能实现100%的兼容吗？

如上所述，兼容层仅仅完成上下文的切换，本质上还是谁的元素谁去渲染，所以理论上能实现100%的兼容，
但目前考虑到实际使用情况并没有实现100%兼容，有些注意事项已在文档中说明，如果有需求后面我们会
逐步完善来达到100%兼容性

## 开发

```shell
git clone https://github.com/ksc-fe/kpc.git
cd kpc
npm install
npm run dev:doc

# 测试
npm run test
# 更新测试快照
npm run snapshot
# 部署文档
npm run deploy:doc
# 发版
npm run release
```

## 许可

MIT


[1]: http://javey.github.io/intact/
[2]: https://vuejs.org/
[3]: https://reactjs.org/
