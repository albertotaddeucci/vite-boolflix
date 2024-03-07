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

      movieInfo(){

        
        axios.get(`https://api.themoviedb.org/3/movie/${store.movieId}/credits?language=en-US?&api_key=7435d4db019da203e03d5023f0eccd1c`)
        .then(res =>{
          
         store.movieCast = res.data.cast.slice(0,5)
        
        
        })
        
        

      },
      tvInfo(){
        axios.get(`https://api.themoviedb.org/3/tv/${store.tvId}/credits?language=en-US?&api_key=7435d4db019da203e03d5023f0eccd1c`)
        .then(result =>{
          
         store.tvCast = result.data.cast.slice(0,5)
         

        
        
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
  <AppMain @info="movieInfo" @tvInfo="tvInfo"></AppMain>


</template>

<style>


</style>