<template>
    <li>
        <div class="itemWrap">
            <div class="checkWrap">
                <button class="xi-checkbox-blank"></button>
                <!-- <button class="xi-check-square-o"></button> -->
            </div>
            <div class="titleWrap">
                <h4>{{item.title}}</h4>
            </div>
            <div class="buttonWrap">
                <button class="xi-minus-square-o"></button>
            </div>
        </div>
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