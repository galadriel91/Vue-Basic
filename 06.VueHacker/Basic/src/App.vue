<template>
  <div>
    <RouterNav/>
    <RouterView/>
  </div>
</template>

<script>
import RouterNav from './components/RouterNav.vue'
export default {
  components: { RouterNav },

}
</script>

<style lang="scss">
  @import '@/assets/scss/index';
</style>