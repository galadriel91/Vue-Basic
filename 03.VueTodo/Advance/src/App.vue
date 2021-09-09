<template>
  <div class="container">
    {{this.$store.state.test}}
  </div>
</template>

<script>
import { store } from '@/store/index'
export default {
  store,
}
</script>

<style lang="scss">
  @import '@/assets/scss/index';
</style>