<template>
    <div class="userContainer">
        <UserItem :item="USERITEM">
            <h4 slot="userName">User : {{USERITEM.id}}</h4>
            <span slot="userTime">Created : {{USERITEM.created}}</span>
            <p slot="userPoints">Karma : {{USERITEM.karma}}</p>
        </UserItem>
    </div>
</template>

<script>
import UserItem from '../components/UserItem.vue'
export default {
    components:{
        UserItem
    },
    computed:{
        USERITEM(){
            return this.$store.state.users
        }
    },
    created(){
        this.$store.dispatch('GET_USER' , this.$route.params.id)
    }
}
        
</script>

<style lang="scss" scoped>
    @import '@/assets/scss/pages/UserPage';
</style>