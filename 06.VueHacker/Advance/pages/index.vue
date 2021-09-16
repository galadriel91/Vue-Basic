<template>
  <div>
    <ul>
        <li v-for="(item , index) in itemList" :key="item.id">
            <div class="itemWrap">
                <span class="indexNumber">{{index + 1}}</span>
                <div class="itemInfo">
                    <p v-if="item.domain"><a :href="item.url" target="_blank">{{item.title}}</a></p>
                    <p v-else><RouterLink :to="`/item/${item.id}`">{{item.title}}</RouterLink></p>
                    <div>
                        <template>
                            <span v-if="item.type === 'job'">by</span>
                            <span v-else>{{item.points}} points by</span>
                        </template>
                        <template>
                            <RouterLink :to="`/user/${item.user}`" v-if="item.user">{{item.user}}</RouterLink>
                            <a :href="item.url" v-else>{{item.domain ? item.domain : 'Unknown'}}</a>
                        </template>
                        <span>{{item.time_ago}}</span>
                    </div>
                </div>
            </div>
        </li>
    </ul>
  </div>
</template>

<script>
import { fetchNewsData } from '~/api'
export default {
  async asyncData(){
    const { data } = await fetchNewsData();
    const itemList = data
    return {itemList}
  }
}
</script>

<style lang="scss" scoped>

</style>