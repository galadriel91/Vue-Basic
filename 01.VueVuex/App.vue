<template>
    <div class="container">
        <VueVuex/>
    </div>
</template>

<script>
import VueVuex from 'Components/VueVuex'
import { store } from 'Store/index'
export default {
    components:{
        VueVuex
    },
    store
}
</script>

<style lang="scss">
    @import 'Style/index';
</style>