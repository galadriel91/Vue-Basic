<template>
    <ul>
        <TodoItem v-for="item in TODOLIST" :key="item.id" :item="item"/>
    </ul>
</template>

<script>
import TodoItem from 'Components/TodoItem'
export default {
    components:{
        TodoItem
    },
    computed:{
        TODOLIST(){
            return this.$store.state.todoList
        }
    }
}
</script>

<style lang="scss" scoped>
    @import 'Style/components/TodoContainer';
</style>