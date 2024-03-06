<script>

import {store} from '../store.js'


export default {
    name: "AppSearch",    

    data(){
      return{
         store,    
                  

      }
  },

    
}


</script>

<template>

    <div>
        <input type="search" v-model="store.movieToSearch">
        <button @click="$emit('search')">Cerca</button>
    </div>
    

</template>

<style>


</style>