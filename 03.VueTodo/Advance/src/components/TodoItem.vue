<template>
    <li>
        <div class="itemWrap">
            <div class="checkWrap">
                <button class="xi-checkbox-blank"></button>
                <!-- <button class="xi-check-square-o"></button> -->
            </div>
            <div class="titleWrap">
                <h4>안녕하세요</h4>
                <!-- <form v-else @submit.prevent="onSubmitUpdate">
                    <input type="text" :placeholder="item.title" ref="answer" v-model="value">
                    <button type="submit" class="xi-check-min"></button>
                </form> -->
                <button class="xi-pen updateBtn"></button>
            </div>
            <div class="buttonWrap">
                <button class="xi-minus-square-o" ></button>
            </div>
        </div>
    </li>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
    @import '@/assets/scss/components/TodoItem';
</style>