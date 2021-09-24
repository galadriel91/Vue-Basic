<template>
    <div class="ball" :style="{background:BACKGROUND}">{{item}}</div>
</template>

<script>
export default {
    props:{
        item:{
            type:Number,
            required:true
        }
    },
    computed:{
        BACKGROUND(){
            if(this.item <= 10){
                return "#39a6a3"
            }else if(this.item <= 20){
                return "#fb9300"
            }else if(this.item <= 30){
                return "#ac66cc"
            }else if(this.item <= 40){
                return "#2978b5"
            }else{
                return "#ca8a8b"
            }
        }
    }
}
</script>

<style lang="scss" scoped>
    @import 'Style/partials/NumberBall';
</style>