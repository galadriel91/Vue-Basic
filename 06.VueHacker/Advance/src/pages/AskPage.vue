<template>
    <div>
        <ListItem/>
    </div>
</template>

<script>
import ListItem from '../components/ListItem.vue'
import Mixins from '@/mixins/index'
export default {
    components: { ListItem },
    mixins:[Mixins]
}
</script>

<style>

</style>