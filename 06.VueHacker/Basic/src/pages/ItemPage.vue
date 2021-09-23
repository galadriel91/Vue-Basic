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
import Mixin from '@/utils/mixins'
export default {
    components:{
        UserItem
    },
    computed:{
        ITEM(){
            return this.$store.state.item
        }
    },
    mixins:[Mixin]
}
</script>

<style lang="scss" scoped>
    @import '@/assets/scss/pages/ItemPage';
</style>