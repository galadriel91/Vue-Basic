<template>
    <ul class="itemWrap">
        <li v-for="item in products" :key="item.id" @click="onClickDetailItem(item.id)">
            <em><img :src="item.imageUrl" :alt="item.name" v-lazy-load></em>
            <div>
                <p>{{item.name}}</p>
                <span>{{item.price}}$</span>
            </div>
        </li>
    </ul>
</template>

<script>
export default {
    props:{
        products:{
            type:Array,
            required:true
        }
    },
    methods:{
        onClickDetailItem(id){
            this.$router.push(`/detail/${id}`)
        }
    }
}
</script>

<style lang="scss" scoped>
    @import '@/assets/scss/components/ProductsItem';
</style>