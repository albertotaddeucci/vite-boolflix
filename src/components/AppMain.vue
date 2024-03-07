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

        
        <div>
            <select id="select" v-model="store.selected" @change="$emit('filter')" >
                <option disabled value="">Seleziona un genere</option>
                <option  v-for="genre in store.genres" :value="genre.id">{{genre.name}}</option>
                
            </select>
        </div>
        <div v-show="store.movies.length!=0">
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
        
        <div v-show="store.tvs.length!=0">
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

h2 {
    margin-top: 30px;
    font-size: 30px;
    color: red;
}

.item-list {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    // overflow-x: auto;

    padding: 20px;
}





</style>