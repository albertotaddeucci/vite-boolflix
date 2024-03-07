<script>
import axios from 'axios';

import {store} from './store.js'

import AppMain from './components/AppMain.vue';
import AppHeader from './components/AppHeader.vue';

export default {
    components:{
      AppMain,
      AppHeader,
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
            el.vote_average = this.transformToStar(this.convertTo5(el.vote_average))
            


            
          });
        
        
        }),
        axios.get('https://api.themoviedb.org/3/search/tv?api_key=7435d4db019da203e03d5023f0eccd1c&query=' + this.store.movieToSearch )
        .then(result =>{
          
          this.store.tvs = result.data.results

          this.store.tvs.forEach(el => {
            el.vote_average = this.transformToStar(this.convertTo5(el.vote_average))
            
          });
        
        
        })
        

      },
  
      //arrotondamento e conversione voto max da 10 a 5
      convertTo5(num){
        return Math.round(num)/2

      },

      //trasformazione da numero a stelle
      transformToStar(num){
        let i = 0;
        let star = "";
        while (i < num) {
          star += "⭐";          
          i++;
          
        };

        return star
      }


    },
    
    

    

}

    



</script>

<template>

  <AppHeader @search="serchMovie"></AppHeader>
  <AppMain></AppMain>


</template>

<style>


</style>