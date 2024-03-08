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

        clearInterval(this.timer)


        store.isHomeActive=false

        

        axios.get('https://api.themoviedb.org/3/search/movie?language=it-IT&api_key=7435d4db019da203e03d5023f0eccd1c&query=' + this.store.movieToSearch )
        .then(res =>{
          
          this.store.movies = res.data.results               
        
        }),

        axios.get('https://api.themoviedb.org/3/search/tv?language=it-IT&api_key=7435d4db019da203e03d5023f0eccd1c&query=' + this.store.movieToSearch )
        .then(result =>{
          
          this.store.tvs = result.data.results                
        
        })

        
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
          
          return this.store.movies=this.store.movieFiltered, this.store.tvs=this.store.tvFiltered
          
        })   


      },

      slideShow(){
        store.slideIndex++
        if(store.slideIndex==4){
          store.slideIndex = 0
        }
      },

      createHome(){
        
        store.isHomeActive=true
        this.store.movies = []
        
        this.timer = setInterval(this.slideShow,3000)
        
        axios.get(`https://api.themoviedb.org/3/movie/popular?language=it-IT&page=1&api_key=7435d4db019da203e03d5023f0eccd1c`)
        .then(res =>{
          this.store.movies = res.data.results.slice(0,4)
                    
        })
        
      },

      
    },

    created(){
      
      this.createHome()     
  
      axios.get(`https://api.themoviedb.org/3/genre/movie/list?language=en?&api_key=7435d4db019da203e03d5023f0eccd1c`)
        .then(res =>{
          store.genres = res.data.genres

      })
                  
    }
           
}

    



</script>

<template>

  <AppHeader @search="serchMovie" @home="createHome" @clear="createHome"></AppHeader>
  <AppMain @filter="filterMovie" ></AppMain>


</template>

<style>




</style>