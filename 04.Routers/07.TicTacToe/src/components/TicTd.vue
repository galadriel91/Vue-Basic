<template>
    <td @click="onClickTd">{{cellItem}}</td>
</template>

<script>
export default {
    props:{
        rowIndex:{
            type:Number,
            required:true
        },
        cellIndex:{
            type:Number,
            required:true
        },
        cellItem:{
            type:String,
            required:true
        }
    },
    computed:{
        TURN(){
            return this.$store.state.turn
        },
        GAMETABLE(){
            return this.$store.state.gameTable
        }
    },
    methods:{
        onClickTd(){
            const { rowIndex , cellIndex , cellItem , TURN , GAMETABLE} = this
            let win = false
            if(cellItem){
                return
            }
            this.$store.commit('SET_TD' , {
                row:rowIndex,
                cell:cellIndex
            })
            if(GAMETABLE[rowIndex][0] === TURN && GAMETABLE[rowIndex][1] === TURN && GAMETABLE[rowIndex][2] === TURN ){
                win = true
            }
            if(GAMETABLE[0][cellIndex] === TURN && GAMETABLE[1][cellIndex] === TURN && GAMETABLE[2][cellIndex] === TURN ){
                win = true
            }
            if(GAMETABLE[0][0] === TURN && GAMETABLE[1][1] === TURN && GAMETABLE[2][2] === TURN ){
                win = true
            }
            if(GAMETABLE[0][2] === TURN && GAMETABLE[1][1] === TURN && GAMETABLE[2][0] === TURN ){
                win = true
            }
            if(win){
                this.$store.commit('SET_WINNER')
            }else{
                let all = true
                GAMETABLE.forEach(rowItem=>{
                    rowItem.forEach(cellItem=>{
                        if(!cellItem){
                            all = false
                        }
                    })
                })
                if(all){
                    this.$store.commit('SET_DRAW')
                }else{
                    this.$store.commit('CHANGE_TURN')
                }
            }
        }
    }
}
</script>

<style lang="scss" scoped>
    @import 'Style/partials/TicTd';
</style>