<template>
    <div class="container">
        <h1>상세 페이지</h1>
        <DetailItem/>
    </div>
</template>

<script>
import DetailItem from '~/components/DetailItem.vue'
export default {
  components: { DetailItem },

}
</script>

<style lang="scss" scoped>
    @import '@/assets/scss/pages/DetailPage';
</style>