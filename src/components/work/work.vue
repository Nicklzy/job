<template>
  <div class="work">
    <p class="name">主要项目</p>
    <div class="project-wrapper clearfix">
      <a href="https://58ee.top/" target="_blank" class="item1">
        <img src="./glasses.png" alt="">
        <div class="desc">
          <h2 class="title">云镜项目</h2>
          <p>
            参与云镜企业产品模块改进，根据设计需求，完善首营企业、我的产品等模块。使用bootstrap框架对产品UI进行完善，采用ejs模板。使用sail.js框架，对后台数据进行处理。操作MySQL添加模块中新增的数据种类</p>
        </div>
      </a>
      <a href="https://github.com/Nicklzy/job" target="_blank" class="item2">
        <img src="./job.png" alt="">
        <div class="desc">
          <h2 class="title">简历模板</h2>
          <p>项目描述：基于vue.js框架搭建的个人简历模板，使用vue-cli开发的单页项目。
          使用技术：vue-cli、vue.js、vue-router、stylus、webpack、CSS3动画、响应式</p>
        </div>
      </a>
      <a href="http://book.jirengu.com/jirengu-inc/jrg-renwu5/%E6%9D%8E%E6%99%BA%E8%BF%9C/music/index.html" target="_blank" class="item3">
        <img src="./music.png" alt="">
        <div class="desc">
          <h2 class="title">FM Player</h2>
          <p>界面优雅的音乐播放页面，依赖豆瓣fm的海量音乐资源，支持切换频道，下一曲，暂停\播放，循环播放，随机播放，歌词随时间显示功能。使用技术：HTML5、CSS3、自定义字体、响应式、ajax、正则、audio元素的相关属性操作、jQuery常见操作、CSS3动画</p>
        </div>
      </a>
      <a href="https://www.npmjs.com/package/weatherget" target="_blank" class="item4">
        <img src="./weather.png" alt="">
        <div class="desc">
          <h2 class="title">Weatherget</h2>
          <p>基于nodejs制作的命令行查询国内城市天气工具，调用公共的天气API接口。参数为城市拼音，缺省值为当前城市
            使用技术： nodejs、npm发布、github、加载、封装模块、http请求、JSON数据解析</p>
        </div>
      </a>
    </div>
    <p class="name">小设计</p>
    <div class="project-wrapper clearfix">
      <a href="http://book.jirengu.com/jirengu-inc/jrg-renwu5/%E6%9D%8E%E6%99%BA%E8%BF%9C/task39/index.html" target="_blank" class="item5">
        <img src="./web.png" alt="">
        <div class="desc">
          <h2 class="title">web小站</h2>
          <p>一个Web小站。包含全屏轮播、jsonp、瀑布流、懒加载、回到顶部、时间轴布局、RequireJS、并使用r.js打包</p>
        </div>
      </a>
      <a href="https://github.com/Nicklzy/jquery-carousel" target="_blank" class="item6">
        <img src="./lunbo.png" alt="">
        <div class="desc">
          <h2 class="title">jQuery轮播插件</h2>
          <p>基于jQuery的轮播插件，包括渐变轮播与滚动轮播。可以自适应宽度、自适应图片数量，有方便的切换按钮。使用技术：jQuery、jQuery动画</p>
        </div>
      </a>
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
  .work
    width: 100%
    .name
      margin: 30px
      font-size: 32px
      color: #000
      font-weight: 900
    .project-wrapper
      margin: 0 auto
      width: 90%
      &:last-child
        margin-bottom 40px
      a
        position: relative
        display: block
        float: left
        overflow hidden
        outline 1px solid #fff
        width: 50%
        transition all 0.3s
        font-size: 0
        &.item2:hover
          background-color: #4ec141
        &.item3:hover
          background-color: #237dca
        &.item4:hover
          background-color: #d46b2b
        &.item5:hover
          background-color: #bf0404
        &.item6:hover
          background-color: #bfb31b
        &:hover
          background-color: #67d2bf
          img
            opacity 0.2
            transform: scale3d(1.05, 1.05, 1)
          .desc
            background-color: transparent
            h2
              transform: translateY(-50px)
            p
              transform: translateY(1px)
              transition-delay 0.3s
              opacity: 1
        img
          width: 100%
          transition all 0.3s
        .desc
          position: absolute
          top: 0
          left: 0
          bottom: 0
          right: 0
          background-color: rgba(0, 0, 0, 0.25)
          color: #fff
          transition all 0.3s
          h2
            position: absolute
            margin: 0 auto
            transform: translateY(-50%)
            text-align: center
            top: 50%
            width: 100%
            font-size: 28px
            text-shadow: 2px 2px 16px #000000
            transition all 0.3s
          p
            position: absolute
            width: 100%
            top: 50%
            transform: translateY(-50%)
            transition all 0.3s
            opacity 0
            text-align: center
            font-size: 18px
            line-height: 25px


</style>
