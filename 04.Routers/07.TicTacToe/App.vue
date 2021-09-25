<template>
    <div class="container">
        <TicTacToe/>
    </div>
</template>

<script>
import { store } from 'Store/index';
import TicTacToe from 'Components/TicTacToe'
export default {
    components:{
        TicTacToe
    },
    store,
}
</script>

<style lang="scss">
    @import 'Style/index';
</style>