<template>
  <div class="info">
    <div class="info-bg">
      <p class="title">个人信息</p>
      <ul class="basic">
        <li>年龄：23</li>
        <li>教育经历：本科/浙江理工大学</li>
        <li>应聘岗位：Web前端工程师</li>
        <li>目标城市：杭州</li>
        <li>联系电话：15067141786</li>
      </ul>
      <div class="desc">
        我是一个性格幽默、做事认真，热爱运动的人。我喜欢研究所碰到的各种技术，热衷解决碰到的任何程序问题，不给自己设边界，有 Geek 精神。我有时间概念，能在约定时间内保证完成任务。<br>我正在寻找一家公司希望加入一个以技术为驱动，从事前端开发工作，并且可以提升大型项目的驾驭能力，希望新工作有成长空间，技术上有挑战性，技术氛围够Geek，使人有成就感的互联网公司。
      </div>
    </div>
  </div>
</template>
<script type="text/ecmascript-6">
  export default{}
</script>
<style lang="stylus" rel="stylesheet/stylus">
  .info
    position: relative
    background: url(https://oapy20uns.qnssl.com/baground.jpg)
    background-position: center
    background-size: cover
    color: #fff
    .info-bg
      box-sizing border-box
      padding-top: 40px
      padding-left: 60px
      overflow hidden
      height: 100vh
      background: rgba(0, 0, 0, 0.5)
      text-overflow: ellipsis
      .title
        font-size: 28px
        margin-bottom: 30px
      .basic
        margin-bottom: 40px
        li
          margin-bottom: 10px
          line-height: 30px
          height: 30px
          font-size: 18px
      .desc
        margin-right: 450px
        line-height: 35px
        font-size: 18px
        @media only screen and (max-width: 1280px)
          line-height: 25px
</style>
