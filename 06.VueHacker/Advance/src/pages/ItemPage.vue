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
    </div>
</template>

<script>
import UserItem from "../components/UserItem.vue"
export default{
    components:{
        UserItem
    },
    created(){
        this.$store.dispatch('GET_ITEM' , this.$route.params.id)
    },
    computed:{
        ITEM(){
            return this.$store.state.item
        }
    }
} 

</script>

<style lang="scss" scoped>
    @import '@/assets/scss/pages/ItemPage';
</style>