<template>
  <div>
    <RouterNav/>
    <RouterView/>
    <LoadingSpin :loading="loadingCheck"/>
  </div>
</template>

<script>
import LoadingSpin from './components/LoadingSpin.vue'
import RouterNav from './components/RouterNav.vue'
import bus from '@/utils/bus';
export default {
  components: { RouterNav , LoadingSpin },
  
  data(){
    return{
      loadingCheck:true
    }
  },
  methods:{
    onLoading(){
      this.loadingCheck = true
      console.log(1)
    },
    offLoading(){
      this.loadingCheck = false
    }
  },
  created(){
    bus.$on('startSpin' , this.onLoading);
    bus.$on('endSpin' , this.offLoading);
  },


}
</script>

<style lang="scss">
  @import '@/assets/scss/index';
</style>