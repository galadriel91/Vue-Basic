<template>
    <div class="itemContainer">
        <UserItem :item="ITEM">
            <h4 slot="userName"><router-link :to="`/user/${ITEM.user}`">User : {{ITEM.user}}</router-link></h4>
            <p slot="userTime">Posted : {{ITEM.time_ago}}</p>
            <span slot="userPoints">Points : {{ITEM.points}}</span> 
        </UserItem>
        <div class="itemWrap">
            <h1>{{ITEM.title}}</h1>
            <div>
                <p v-html="ITEM.content"></p>
            </div>
        </div>
    </div>
</template>

<script>
import UserItem from '@/components/UserItem'
export default {
    components:{
        UserItem
    },
    created(){
        this.$store.dispatch('GET_ITEM' ,this.$route.params.id)
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