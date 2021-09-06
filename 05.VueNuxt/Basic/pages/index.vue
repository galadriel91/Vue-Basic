<template>
  <div class="container">
    <div class="searchWrap">
      <SearchInput/>
    </div>
    <h1>상품 페이지</h1>
    <ul class="itemWrap">
      <li v-for="item in products" :key="item.id" @click="onClickDetailItem(item.id)">
        <em><img :src="item.imageUrl" :alt="item.name"></em>
        <div>
          <p>{{item.name}}</p>
          <span>{{item.price}}$</span>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
import { fetchProductsItem } from '@/api/index'
import SearchInput from '~/components/SearchInput.vue'

export default {
  components: { SearchInput },

  async asyncData(){
    const response = await fetchProductsItem()
    const products = response.data.map((item)=>({
      ...item,
      imageUrl:`${item.imageUrl}?random=${Math.random()}`
    }))
    return { products } 
  },

  methods:{
    onClickDetailItem(id){
      this.$router.push(`/detail/${id}`)
    }
  }

  

}
</script>

<style lang="scss" scoped>
  @import '@/assets/scss/pages/MainPage';
</style>