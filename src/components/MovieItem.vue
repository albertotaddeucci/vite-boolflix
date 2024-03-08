<script>
import axios from 'axios';

import jsonFlags from '../data/all-flags.json'
import {store} from '../store.js'


export default {
    name: "MovieItem",
    
    props:{
        movie: Object,
        
    },

    data() {
        return {
            store, 
            flagName: jsonFlags,
            newUrl: "",

            castOn: false
            
        }
    },

    methods:{
        getFlag(flag){   
            
            const key = flag
            if(this.flagName.hasOwnProperty(key)){
                const url = "https://flagcdn.com/32x24/ua.png"
                this.newUrl = url.slice(0,-6) + flag + ".png"
                
                return this.newUrl

            } else {
                return this.newUrl =""
            }            
             
        },

        getId(num){

            store.movieId = num
            
        },

        transformToStar(num){
            const max = Math.round(num)/2
            let i = 0;
            let star = [];
                while (i < max) {
                    star.push('fa-solid fa-star');          
                    i++;
            
                };

            return star
        },

        turnOffCast(){
            this.castOn = false
        },

        movieInfo(){

            this.castOn = true
        
            axios.get(`https://api.themoviedb.org/3/movie/${store.movieId}/credits?language=en-US?&api_key=7435d4db019da203e03d5023f0eccd1c`)
            .then(res =>{
            store.movieCast = res.data.cast.slice(0,5)         

            });

        },

        
    }



        
}


</script>

<template>

    <div class="item" @mouseenter="this.getId(movie.id)" @mouseleave="turnOffCast()">
        
        <img :src="store.url + movie.poster_path" alt="">

        <div id="item-info">          
    
            <div class="label">
                Titolo <span>{{ movie.title ? movie.title : movie.name }}</span>

            </div> 
            <div class="label">
                Titolo originale <span>{{ movie.original_title ? movie.original_title : movie.original_name }}</span>               
    
            </div> 
            <div class="label language">
                <div v-show="this.newUrl !=''">
                    <img  :src="this.getFlag(movie.original_language)" > 

                </div>
                <div v-show="this.newUrl ==''">
                    Lingua <span>{{ movie.original_language }} </span>              

                </div>     
                
    
            </div> 
            
            <div class="label">
                <div class="genre">
                    Generi
                    <ul class="genre-list" v-for="genre in store.genres"> 
                        
                        <li v-show="movie.genre_ids.includes(genre.id)">
                            {{genre.name}}
                        </li>
                    </ul>
                    
                </div>
                
            </div>

                        
            <button @click="movieInfo()">Vedi cast</button>
            
            <div id="cast-list" class="label center" v-show="castOn == true">
                <div class="cast" >
                    Cast
                    <span v-for="actor in store.movieCast"> {{ actor.name }}</span>
                    
                </div>
                
            </div>

            <div class="label vote">
                <i v-for="star in transformToStar(movie.vote_average)" :class="star"></i>

            </div>
            

            
            
    
            
        </div>

    </div>


</template>

<style lang="scss">
@use '../styles/mixins' as *;


.item{
    position: relative;
    width: 300px;

    img{
        width: 100%;
        
        object-fit: contain;
        display: block;
        
    }
}

#item-info{
    display: flex;
    flex-direction: column;
    align-items: center;
        
    position: absolute;
    top: 0;

    width: 100%;
    height: 100%;

    padding: 15px;
    margin-bottom: 5px;

    background-color: rgba(0, 0, 0, 0.8);
    color: white;
    opacity: 0;
    transition: opacity 0.2s linear;
    
    .label{
        color: red;
        span{
            color: white;            
            font-size: 1.2em;
        }
    }

    #cast-list{
        position: absolute;
        top: 0;
        left: 0;
        z-index: 2;

        height: 100%;
        width: 100%;
        
        background-color: black;

    }
    
    .label.center{
        padding-top: 20px;
        
        text-align: center;
        .cast{
            display: flex;
            flex-direction: column;
            gap: 5px;
    
           
        }
        
    }


    .label.language{
        display: flex;
        flex-direction: column;
        align-items: center;

        padding-top: 20px;
        
    }

    .label
    
        .genre{
            display: flex;
            flex-direction: column;
            align-items: center;
            padding-top: 20px;
            padding-bottom: 30px;

         ul{
                list-style: none;
                color: white;
    
            }
    }
    
    .genre-list{
        display: flex;
    }
    .label.vote{
        position: absolute;

        padding-bottom: 20px;
        bottom: 0px;
        left: 50%;
        transform: translateX(-50%);

        color: yellow
    }


    button{
        @include btn_primary;
        

        
    }




}

#item-info:hover{
    opacity: 1;
}



</style>