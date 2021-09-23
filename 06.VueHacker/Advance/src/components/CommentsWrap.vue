<template>
    <ul>
        <CommentItem v-for="item in ITEM.comments" :key="item.id" :item="item"/>
    </ul>
</template>

<script>
export default {

}
</script>

<style>

</style>