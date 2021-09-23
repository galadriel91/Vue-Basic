<template>
    <div class="itemContainer">
        <UserItem :item="ITEM">
            <h4 slot="userName"><RouterLink :to="`/user/${ITEM.user}`">User : {{ITEM.user}}</RouterLink></h4>
            <span slot="userTime">Posted : {{ITEM.time_ago}}</span>
            <p slot="userPoints">Points : {{ITEM.points}}</p>
        </UserItem>
        <div class="itemWrap">
            <h1>{{ITEM.title}}</h1>
            <div v-html="ITEM.content"></div>
        </div>
        <div class="commentWrap">
            <h2>Comments</h2>
            <ul>
                <CommentItem v-for="item in ITEM.comments" :key="item.id" :item="item"/>
            </ul>
        </div>
    </div>
</template>

<script>
import UserItem from "../components/UserItem.vue"
import CommentItem from '@/components/CommentItem'
import Mixins from '@/mixins/index'

export default{
    components:{
        UserItem,
        CommentItem
    },
    computed:{
        ITEM(){
            return this.$store.state.item
        }
    },
    mixins:[Mixins]
} 

</script>

<style lang="scss" scoped>
    @import '@/assets/scss/pages/ItemPage';
</style>