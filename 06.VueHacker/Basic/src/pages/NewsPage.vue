<template>
    <div>
        <ul>
            <li v-for="(item , index) in NEWSLIST" :key="item.id">
                <div class="itemWrap">
                    <span class="indexNumber">{{index + 1}}</span>
                    <div class="itemInfo">
                        <p><a href="">{{item.title}}</a></p>
                        <div>
                            <span>{{item.points}} points by</span>
                            <a href="">{{item.user}}</a>
                            <span>{{item.time_ago}}</span>
                        </div>
                    </div>
                </div>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    created(){
        this.$store.dispatch('GET_NEWS')
    },
    computed:{
        NEWSLIST(){
            return this.$store.state.news
        }
    }
}
</script>

<style lang="scss" scoped>
    @import '@/assets/scss/pages/NewsPage';
</style>