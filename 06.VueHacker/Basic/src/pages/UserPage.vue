<template>
    <div class="userContainer">
        <div class="userWrap">
            <p class="xi-user-address"></p>
            <div class="userInfo">
                <h4>User : {{USER.id}}</h4>
                <p>Created : {{USER.created}}</p> 
                <span>Karma : {{USER.karma}}</span>
            </div>
        </div>
        <div class="userDesc" v-if="USER.about">
            <p>About</p>
            <div v-html="USER.about"></div>
        </div>
    </div>
</template>

<script>
export default {
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