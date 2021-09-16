<template>
    <div class="userContainer">
        <UserItem :item="USER">
            <h4 slot="userName">User : {{USER.id}}</h4>
            <p slot="userTime">created : {{USER.created}}</p>
            <span slot="userPoints">Karma : {{USER.karma}}</span> 
        </UserItem>
    </div>
</template>

<script>
import { fetchUserData } from '~/api'
import UserItem from '~/components/UserItem.vue'
export default {
  components: { UserItem },
    async asyncData({params}){
        const { data } = await fetchUserData(params.id)
        const USER = data
        return { USER }
    }
}
</script>

<style lang="scss" scoped>
    .userContainer{
        width: 120rem; margin: 0 auto;
    }
</style>