<script>
import {store} from './store.js'
import AppNav from './components/AppNav.vue';
import AppMain from './components/AppMain.vue';

export default {
    components:{
      AppNav,
      AppMain
    },

    
    data() {
        return {
            store,
            
        }
    },

    
}


</script>

<template>

  <AppNav></AppNav>
  <AppMain></AppMain>


</template>

<style>


</style>