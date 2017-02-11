<template>
  <div class="skill">
    <h1>我的技能</h1>
    <div class="pic">
      <img src="./skill.png" alt="">
    </div>
    <div class="desc clearfix">
      <ul class="title">
        <li>HTML / CSS</li>
        <li>熟悉HTML5、CSS3、浮动定位、CSS3动画、可准确还原设计稿</li>
        <li>熟悉W3C规范、开发调试、浏览器兼容、flex、栅格、响应式</li>
        <li>熟悉stylus，能够使用bootstrap, less, postcss等CSS框架</li>
      </ul>
      <ul class="title">
        <li>JavaScript</li>
        <li>熟悉原生Javascript、事件模型、DOM 操作、计时器、闭包、jQuery</li>
        <li>熟悉ajax、jsonp、跨域</li>
        <li>原型链、面向对象、封装、</li>
        <li>熟悉模块化、面向对象的方式编程</li>
      </ul>
      <ul class="title">
        <li>框架、工具</li>
        <li>熟悉RequireJS、npm，能够使用Gulp、webpack等前端自动化工具</li>
        <li>熟悉vue框架，善于使用vue-cli搭建单页应用</li>
        <li>熟悉Sublime、WebStorm、git、Vim</li>
      </ul>
      <ul class="title">
        <li>后端</li>
        <li>熟悉webserver、http、能使用php做简单接口调试</li>
        <li>能使用nodejs制作简单工具</li>
        <li>了解MySQL</li>
      </ul>
    </div>
  </div>
</template>
<script type="text/ecmascript-6">
  export default{}
</script>
<style lang="stylus" rel="stylesheet/stylus">
  .clearfix:after
    content: ''
    clear: both
    display: block
  .skill
    background: #eee
    h1
      padding: 30px
      text-align: center
      font-size: 40px
      font-weight: 900
    .pic
      background: #fff
      text-align: center
    .desc
      margin-left: 50px
      margin-top: 30px
      padding-bottom  30px
      background: #eee
      .title
        width: 50%
        float: left
        li
          margin-top: 15px
          list-style-type: circle !important
          color: #585858
          &:first-child
            margin-left: -20px
            list-style: none !important
</style>
