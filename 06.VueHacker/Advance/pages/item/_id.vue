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
import UserItem from '@/components/UserItem.vue'
import { fetchItemData } from '~/api'
export default {
    components:{
        UserItem,
    },
    async asyncData({params}){
        const { data } = await fetchItemData(params.id);
        const ITEM = data
        return {ITEM}

    }
}
</script>

<style lang="scss" scoped>
    @import '@/assets/scss/pages/ItemPage';
</style>