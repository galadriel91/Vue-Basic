<template>
    <form @submit.prevent="$emit('submit')">
        <input type="text" placeholder="Search Item" @input="$emit('input' , $event.target.value)">
        <button class="xi-search" type="submit"></button>
    </form>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
    @import '@/assets/scss/partials/SearchInput';
</style>