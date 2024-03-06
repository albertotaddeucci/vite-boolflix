<script>
import axios from 'axios';

import {store} from './store.js'

import AppNav from './components/AppNav.vue';
import AppMain from './components/AppMain.vue';
import AppSearch from './components/AppSearch.vue';

export default {
    components:{
      AppNav,
      AppMain,
      AppSearch,
    },

    
    data() {
        return {
            store,
            
        }
    },

    created(){
  
      axios.get()
      .then(res =>{
        // this.store.films 
        
        
        })

      
    },

}

    



</script>

<template>

  <AppNav></AppNav>
  <AppSearch></AppSearch>
  <AppMain></AppMain>


</template>

<style>


</style>