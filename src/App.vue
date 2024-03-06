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

    methods:{
      serchMovie(){

        axios.get('https://api.themoviedb.org/3/search/movie?api_key=7435d4db019da203e03d5023f0eccd1c&query=' + this.store.movieToSearch )
        .then(res =>{
          
          this.store.movies = res.data.results

          this.store.movies.forEach(el => {
            el.vote_average = this.convertTo5(el.vote_average)

            
          });
        
        
        }),
        axios.get('https://api.themoviedb.org/3/search/tv?api_key=7435d4db019da203e03d5023f0eccd1c&query=' + this.store.movieToSearch )
        .then(result =>{
          
          this.store.tvs = result.data.results

          this.store.tvs.forEach(el => {
            el.vote_average = this.convertTo5(el.vote_average)
            
          });
        
        
        })
        

      },
  
      //arrotondamento e conversione voto max da 10 a 5
      convertTo5(num){
        return Math.round(num)*5 / 10

      }


    }

    

}

    



</script>

<template>

  <AppNav></AppNav>
  <AppSearch @search="serchMovie"></AppSearch>
  <AppMain></AppMain>


</template>

<style>


</style>