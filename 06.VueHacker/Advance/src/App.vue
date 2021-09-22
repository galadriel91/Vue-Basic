<template>
  <div>
    <RouterNav/>
    <RouterView/>
    <LoadingSpin/>
  </div>
</template>

<script>
import LoadingSpin from './components/LoadingSpin.vue'
import RouterNav from './components/RouterNav.vue'
export default {
  components:{
    RouterNav,
    LoadingSpin
  },
}
</script>

<style lang="scss">
  @import '@/assets/scss/index';
</style>