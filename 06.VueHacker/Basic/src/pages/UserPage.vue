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
import Mixin from '@/utils/mixins'

export default {
    components:{
        UserItem,
    },
    computed:{
        USER(){
            return this.$store.state.user
        }
    },
    mixins:[Mixin]
}
</script>

<style lang="scss" scoped>
    @import '@/assets/scss/pages/UserPage';
</style>