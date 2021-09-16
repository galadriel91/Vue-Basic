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
import UserItem from '@/components/UserItem'
export default {
    components:{
        UserItem,
    },
    created(){
        this.$store.dispatch('GET_USER' , this.$route.params.id)
    },
    computed:{
        USER(){
            return this.$store.state.user
        }
    }
}
</script>

<style lang="scss" scoped>
    @import '@/assets/scss/pages/UserPage';
</style>