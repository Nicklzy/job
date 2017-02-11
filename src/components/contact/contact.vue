<template>
  <div class="contact">
    <div class="pic-wrapper clearfix">
      <div class="pic">
        <img src="./wechat.png" alt="">
        <p>QQ二维码</p>
      </div>
      <div class="pic">
        <img src="./qq.png" alt="">
        <p>微信二维码</p>
      </div>
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
  .contact
      margin-left: 40px
      margin-right: 40px
    .pic-wrapper
      margin-top: 120px
      width: 100%
      padding-bottom: 30px
      border-bottom 1px solid green
      .pic
        width: 50%
        float: left
        text-align: center
        img
          width: 50%
        p
          font-size: 30px
</style>
