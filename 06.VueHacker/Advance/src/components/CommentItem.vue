<template>
    <li>
        <div class="userInfo">
            <p class="xi-profile"></p>
            <div>
                <RouterLink :to="`/user/${item.user}`">{{item.user}}</RouterLink>
                <span>Posted by {{item.time_ago}}</span>
            </div>
        </div>
        <p v-html="item.content" class="content"></p>
        <ul>
            
        </ul>
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
    @import '@/assets/scss/components/CommentItem';
</style>