<template>
    <div>
        <h1>{{VUEX}}</h1>
        <img :src="require('Img/Vuex.png')" alt="">
        <div class="numberWrap">
            <p>{{NUMBER}}</p>
            <button @click="plusBtn">Plus</button>
            <button @click="minusBtn">Minus</button>
        </div>
    </div>
</template>

<script>
export default {
    computed:{
        VUEX(){
            return this.$store.state.test
        },
        NUMBER(){
            return this.$store.state.number
        }
    },
    methods:{
        plusBtn(){
            this.$store.commit('ADD_NUM')
        },
        minusBtn(){
            this.$store.commit('MINUS_NUM')
        }
    }
}
</script>

<style lang="scss" scoped>
    @import 'Style/partials/VueVuex';
</style>