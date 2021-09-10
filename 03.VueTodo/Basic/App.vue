<template>
    <div class="container">
        <TodoHeader/>
        <TodoInput/>
        <TodoContainer/>
    </div>
</template>

<script>
import { store } from 'Store/index';
import TodoHeader from 'Components/TodoHeader'
import TodoInput from 'Components/TodoInput'
import TodoContainer from 'Components/TodoContainer'

export default {
    components:{
        TodoHeader,
        TodoInput,
        TodoContainer
    },
    store,
}
</script>

<style lang="scss">
    @import 'Style/index';
</style>