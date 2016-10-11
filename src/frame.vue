<template>
  <router-view
      :transition="'vux-pop-' + (direction === 'forward' ? 'in' : 'out')"
      ></router-view>
  <v-tabbar>
  </v-tabbar>
</template>

<script>
  import TabBar from './components/TabBar'
  // import Tab from './components/Tab'
  export default {
    components: {
      'v-tabbar': TabBar
      // 'v-tab': Tab
    }
    // vuex: {
    //   getters: {
    //     route: (state) => state.route,
    //     isLoading: (state) => state.isLoading,
    //     direction: (state) => state.direction
    //   }
    // }
  }
</script>
<style scoped>
</style>
