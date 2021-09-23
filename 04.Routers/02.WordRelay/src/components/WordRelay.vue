<template>
    <div>
        <div class="wordWrap">{{word}}</div>
        <form @submit.prevent="onSubmitForm">
            <input type="text" placeholder="세 글자 단어를 입력해 주세요" v-model="value" ref="answer">
            <button class="xi-arrow-right" type="submit"></button>
        </form>
        <div class="resultWrap" :class="{correct:isCorrect}">{{result}}</div>
    </div>
</template>

<script>
export default {
    data(){
        return{
            word:'소나무',
            value:'',
            result:'',
            isCorrect:true,
        }
    },
    mounted(){
        this.$refs.answer.focus()
    },
    methods:{
        onSubmitForm(){
            if(this.value.length === 3){
                if(this.word[this.word.length - 1] === this.value[0]){
                    this.word = this.value
                    this.value = ''
                    this.result = '정답입니다. 계속 하세요!'
                    this.isCorrect = true
                    this.$refs.answer.focus()
                }else{
                    this.value = ''
                    this.result = '다시 한번 생각해 보세요'
                    this.isCorrect = false
                    this.$refs.answer.focus()
                }
            }else{
                this.value = ''
                this.result = '세 자리 단어를 입력해 주세요!'
                this.isCorrect = false
                this.$refs.answer.focus()
            }
        }
    }
}
</script>

<style lang="scss" scoped>
    @import 'Style/partials/WordRelay';
</style>