<template>
    <tr>
        <TicTd v-for="(cellItem , cellIndex) in rowItem" :key="cellIndex" :cellItem="cellItem" :cellIndex="cellIndex" :rowIndex="rowIndex"/>
    </tr>
</template>

<script>
import TicTd from 'Components/TicTd'
export default {
    props:{
        rowIndex:{
            type:Number,
            required:true
        },
        rowItem:{
            type:Array,
            required:true
        }
    },
    components:{
        TicTd
    }
}
</script>

<style lang="scss" scoped>

</style>