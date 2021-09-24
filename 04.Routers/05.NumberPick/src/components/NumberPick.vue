<template>
    <div>
        <div class="startWrap" v-if="isStart">
            <h2>버튼을 클릭해서 번호를 뽑으세요!</h2>
            <button class="xi-play" @click="onClickStart"></button>
        </div>
        <div>
            <NumberBall v-for="(item , i) in pickBalls" :key="i" :item="item"/>
        </div>
        <div class="bonusWrap" v-if="bonus">
            <h3>보너스</h3>
            <NumberBall :item="bonus"/>
            <button class="xi-redo" @click="onClickReset"></button>
        </div>
    </div>
</template>

<script>
import NumberBall from 'Components/NumberBall'
const getNumber = () => {
    const candidate = Array(45).fill('').map((v,i)=>v=i+1);
    const shupple = []
    while(0 < candidate.length){
        const choice = candidate.splice( Math.floor(Math.random()*candidate.length) , 1)[0]
        shupple.push(choice)
    }
    return [...shupple.slice(0,6) , shupple[shupple.length - 1]]
}
const timeouts = []
export default {
    components:{
        NumberBall,
    },
    data(){
        return{
            getBall:getNumber(),
            pickBalls:[],
            bonus:'',
            isStart:true
        }
    },
    methods:{
        onClickStart(){
            this.isStart = false;
            for(let i = 0; i < 6 ; i++){
                timeouts[i] = setTimeout(()=>{
                    this.pickBalls.push(this.getBall[i])
                },(i+1) * 1000)
            }
            timeouts[6] = setTimeout(()=>{
                this.bonus = this.getBall[this.getBall.length - 1]
            },7000)
        },
        onClickReset(){
            this.getBall = getNumber()
            this.pickBalls = []
            this.bonus = ''
            this.onClickStart()
        },
    },
    beforeDestroy(){
        timeouts.forEach(v=>clearTimeout(v))
    }
}
</script>

<style lang="scss" scoped>
    @import 'Style/partials/NumberPick';
</style>