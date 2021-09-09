<template>
    <div class="container">
        {{this.$store.state.test}}
    </div>
</template>

<script>
import { store } from 'Store/index';
export default {
    store,
}
</script>

<style lang="scss">
    @import 'Style/index';
</style>