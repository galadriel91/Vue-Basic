<template>
    <div>
        <RouterNav/>
        <div class="container">
          <RouterView/>
        </div>
    </div>
</template>

<script>
import RouterNav from 'Components/RouterNav.vue'
import { router } from 'Router/index'
import { store } from 'Store/index'
export default {
  components: { RouterNav },
  router,
  store

}
</script>

<style lang="scss">
  @import 'Style/index';
</style>