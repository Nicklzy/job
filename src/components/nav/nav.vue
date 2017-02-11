<template>
  <div id="nav">
    <div class="header">
      <div class="header-img">
        <img src="./head.png" width="125" height="125">
      </div>
      <div class="name">
        <router-link to="/info">李智远</router-link>
      </div>
    </div>
    <ul class="nav-container">
      <li>
        <router-link to="/info">个人</router-link>
      </li>
      <li>
        <router-link to="/work">作品</router-link>
      </li>
      <li>
        <router-link to="/skill">技能</router-link>
      </li>
      <li>
        <router-link to="/contact">联系</router-link>
      </li>
    </ul>
    <div id="footer">
      <div class="logo">
        <a href="http://mail.qq.com/cgi-bin/qm_share?t=qm_mailme&email=y-n4-f77-fvz_Iu6uuWopKY" class="r-youxiang r-icon" target="_blank"></a>
        <a href="http://www.jianshu.com/u/45eae6119286" class="r-shu r-icon" target="_blank"></a>
        <a href="https://github.com/Nicklzy" class="r-github r-icon" target="_blank"></a>
      </div>
      <p class="source">
        Open source:<a href="https://github.com/Zegendary/Garbage" target="_blank">GitHub</a>
        <br>
        <span class="right">© copyright Nicklzy,2017</span>
      </p>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  export default{}
</script>

<style lang="stylus" rel="stylesheet/stylus">
  #nav
    position: fixed
    left: 0
    top: 0
    right: 0
    bottom: 0
    z-index: 100
    width: 250px
    background: linear-gradient(135deg, #2c2e2c 0, #202021 100%)
    .header
      margin: 30px auto 30px auto
      width: 50%
      text-align: center
      .header-img
        width: 125px
        height: 125px
        border-radius: 50%
        background: #fff
        img
          border-radius: 50%
      .name
        margin-top: 25px
        font-size: 40px
        a
          color: #61c191
    .nav-container
      margin-top: 40px
      margin-left: 60px
      li
        margin-bottom: 50px
        a
          color: #fff
          font-size: 20px
          transition: all 0.3s
          &.active
            color: #f9c427
          &:hover
            color: #2bb0d4
    #footer
      position: absolute
      bottom: 10px
      left: 40px
      right: 40px
      text-align: center
      font-size: 0
      .logo
        a
          display: inline-block
          margin: 5px
          line-height: 40px
          text-align: center
          width: 40px
          height: 40px
          color: #fff
          font-size: 24px
          border-radius: 50%
        .r-youxiang
          background-color: rgb(0, 171,108)
        .r-shu
          background-color: rgb(88,70,19)
        .r-github
          color: #000
          background-color: #fff
      .source
        margin-top: 20px
        font-size: 14px
        color: #999
</style>
