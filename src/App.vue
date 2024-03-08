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

        store.movieToSearch="";        
        
      },

      movieInfo(){

        
        axios.get(`https://api.themoviedb.org/3/movie/${store.movieId}/credits?language=en-US?&api_key=7435d4db019da203e03d5023f0eccd1c`)
        .then(res =>{
          store.movieCast = res.data.cast.slice(0,5)         
        
        
        });
        
        
        

      },
      

      filterMovie(){

        store.movieFiltered=[];
        store.tvFiltered=[];
               
        axios.get('https://api.themoviedb.org/3/search/multi?api_key=7435d4db019da203e03d5023f0eccd1c&query=' + this.store.movieToSearch )
        .then(res =>{
        
          this.store.allItems = res.data.results

          
          this.store.allItems.forEach(element => {
            
            if(element.genre_ids.includes(store.selected) && element.media_type=="movie"){  
              store.movieFiltered.push(element)
              
            } else if(element.genre_ids.includes(store.selected) && element.media_type=="tv"){
              store.tvFiltered.push(element)
            }
            
          });

          this.store.movieFiltered.forEach(el => {
            el.vote_average = this.transformToStar(this.convertTo5(el.vote_average))     

          });
          
          return this.store.movies=this.store.movieFiltered, this.store.tvs=this.store.tvFiltered
          
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

    created(){
      let movieGenres
      let tvGenres
      let allGenres
  
      axios.get(`https://api.themoviedb.org/3/genre/movie/list?language=en?&api_key=7435d4db019da203e03d5023f0eccd1c`)
        .then(res =>{
          store.genres = res.data.genres

      })
      // axios.get(`https://api.themoviedb.org/3/genre/tv/list?language=en?&api_key=7435d4db019da203e03d5023f0eccd1c`)
      //   .then(res =>{
      //     tvGenres = res.data.genres
      //     console.log(tvGenres)

          
          
      //     allGenres = movieGenres.concat(tvGenres)
      //     store.genres = allGenres.filter((el,index)=>{ store.genres.indexOf(el)==index})

          
      //     console.log(store.genres)
      // })


      

        
    }
    
    

    

}

    



</script>

<template>

  <AppHeader @search="serchMovie" ></AppHeader>
  <AppMain @filter="filterMovie" ></AppMain>


</template>

<style>


</style>