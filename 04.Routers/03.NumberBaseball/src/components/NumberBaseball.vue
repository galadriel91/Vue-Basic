<template>
    <div>
        <p class="resultWrap" :class="{correct:isCheck}">
            {{result}}
        </p>
        <form @submit.prevent="onSubmitForm">
            <input type="text" placeholder="네 자리 숫자를 입력해 주세요" maxlength="4" minlength="4" ref="answer" v-model="value" @input="onChangeInput"/>
            <button class="xi-arrow-right" type="submit"></button>
        </form>
        <ul>
            <NumberItem v-for="item in tries" :item="item" :key="item.index"/>
        </ul>
    </div>
</template>

<script>
import NumberItem from 'Components/NumberItem'
const getNumber = () => {
    const candidate = [1,2,3,4,5,6,7,8,9]
    const shupple = []
    for(let i = 0 ; i < 4 ; i++){
        const choice = candidate.splice(Math.floor(Math.random() * candidate.length) ,1)[0]
        shupple.push(choice)
    }
    return shupple
}

export default {
    components:{
        NumberItem
    },

    data(){
        return{
            answer:getNumber(),
            value:'',
            tries:[],
            result:'',
            isCheck:false
        }
    },
    methods:{
        onSubmitForm(){
            if(this.value.length !== 4){
                this.result = `네 자리 숫자를 입력해 주세요`;
                this.value = '';
                this.$refs.answer.focus();
                this.isCheck = true
            }else{
                if(this.answer.join('') === this.value){
                    this.result = `홈런 입니다!`;
                    this.answer = getNumber();
                    this.tries = [];
                    this.value = '';
                    this.isCheck = false
                    this.$refs.answer.focus();
                }else{
                    if(this.tries.length >= 9){
                        this.result = `횟수를 초과했습니다. 정답은 ${this.answer.join(',')}였습니다.`;
                        this.answer = getNumber();
                        this.tries = [];
                        this.value = '';
                        this.isCheck = false
                        this.$refs.answer.focus();
                    }else{
                        let strike = 0;
                        let ball = 0;
                        const valueArray = this.value.split('').map((v)=>parseInt(v))
                        for(let i = 0 ; i < 4 ; i++){
                            if(valueArray[i] === this.answer[i]){
                                strike++
                            }else if(this.answer.includes(valueArray[i])){
                                ball++
                            }
                        }
                        this.tries.unshift({
                            index:this.tries.length + 1,
                            result:`${strike}스트라이크 , ${ball}볼 입니다.`,
                            try:this.value
                        })
                        this.isCheck = false
                        this.value = ''
                        this.$refs.answer.focus()
                    }
                }
            }
        },
        onChangeInput(){
            this.result = ''
        }
    },
    mounted(){
        this.$refs.answer.focus()
    }
}
</script>

<style lang="scss" scoped>
    @import 'Style/partials/NumberBaseball';
</style>