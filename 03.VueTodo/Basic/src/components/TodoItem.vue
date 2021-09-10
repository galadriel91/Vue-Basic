<template>
    <li>
        {{item.title}}
    </li>
</template>

<script>
export default {
    props:{
        item:{
            type:Object,
            required:true
        }
    }
}
</script>

<style lang="scss" scoped>
    @import 'Style/components/TodoItem';
</style>