<template>
  <div class="container">
    <TodoHeader/>
    <TodoInput/>
    <TodoContainer/>
  </div>
</template>

<script>
import { store } from '@/store/index'
import TodoHeader from '@/components/TodoHeader'
import TodoInput from '@/components/TodoInput'
import TodoContainer from '@/components/TodoContainer'
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
  @import '@/assets/scss/index';
</style>