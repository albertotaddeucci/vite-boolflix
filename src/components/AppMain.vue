<script>
import MovieItem from './MovieItem.vue';

import {store} from '../store.js'


export default {
    name: "AppMain",
    
    components: {
        MovieItem,
        
    },

    data() {
        return {
            store, 
           
            
            
        }
    },
    
}


</script>

<template>

    
    <div class="container">
        
        <div id="jumbo" v-show="store.isHomeActive==true">
            <div v-for="currentMovie,index in store.movies" >
                <div v-show="store.slideIndex==index" id="title"><span>{{ currentMovie.title }}</span></div>
                <img v-show="store.slideIndex==index" :src="store.urlBg + currentMovie.backdrop_path" alt="">
    
            </div>
        </div>
        
        <!-- <div>
            <select id="select" v-model="store.selected" @change="$emit('filter')" >
                <option disabled value="">Seleziona un genere</option>
                <option  v-for="genre in store.genres" :value="genre.id">{{genre.name}}</option>
                
            </select>
        </div> -->


        <div v-show="store.isHomeActive==true" id="popular">
            <h2>Most popular</h2>
            <div class="item-list">
                <MovieItem
                v-for="currentMovie in store.movies" 
                :movie="currentMovie"
                @mouseenter="$emit('info')"
                >
                </MovieItem>            
            
            </div>
        </div>


        <div v-show="store.movies.length!=0 && store.isHomeActive==false">
            <h2>Movies</h2>
            <div class="item-list">
                <MovieItem
                v-for="currentMovie in store.movies" 
                :movie="currentMovie"
                @mouseenter="$emit('info')"
                >
                </MovieItem>            
            
            </div>

        </div>
        
        <div v-show="store.tvs.length!=0 && store.isHomeActive==false">
            <h2>Tv Series</h2>
            <div class="item-list">
                <MovieItem
                v-for="currentTv in store.tvs" 
                :movie="currentTv"
                @mouseenter="$emit('info')"
                >
                </MovieItem>        
            
            </div>           
            

        </div>

        

    </div>

</template>

<style lang="scss">
@use '../styles/general' as *;

#jumbo{
    margin: 0 auto;
    position: relative;


    #title{
        
        position: absolute;
        top: 5%;
        left: 5%;
        font-size: 5em;

        
    }
    
    img{
        width: 100%;
        display: block;
        object-fit: cover;
    }
}

h2 {
    margin-top: 30px;
    font-size: 30px;
    color: red;
}

.item-list {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;

    padding: 20px;
}





</style>