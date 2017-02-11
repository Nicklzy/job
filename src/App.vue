<template>
  <div id="app">
    <v-nav></v-nav>
    <div class="aside">
      <div class="container">
        <!--<transition name="router">-->
          <router-view></router-view>
        <!--</transition>-->
      </div>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  import nav from 'components/nav/nav'

  export default {
    components: {
      'v-nav': nav
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  #app
    position: relative
    .aside
      position: relative
      width: 100%
      .container
        margin-left: 250px
/*        .router-enter-active, .router-leave-active {
          transition: opacity .3s ease
        }
        .router-enter, .router-leave-active {
          opacity: 0
        }*/
</style>
