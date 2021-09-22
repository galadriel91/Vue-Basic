<template>
    <div>
        <ListItem/>
    </div>
</template>

<script>
import ListItem from '../components/ListItem.vue'
export default {
    components: { ListItem },
    mounted(){
      this.$store.dispatch('END_LOADING')
    }
}
</script>

<style>

</style>