<template>
    <ul>
        <TodoItem/>
    </ul>
</template>

<script>
import TodoItem from '@/components/TodoItem'
export default {
    components:{
        TodoItem
    }
}
</script>

<style lang="scss" scoped>
    @import '@/assets/scss/components/TodoContainer';
</style>