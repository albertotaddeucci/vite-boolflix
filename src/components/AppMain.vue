<script>
import MovieItem from './MovieItem.vue';
import TvItem from './TvItem.vue';

import {store} from '../store.js'


export default {
    name: "AppMain",
    
    components: {
        MovieItem,
        TvItem
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

        <h2>Movies</h2>

        <!-- <div>
            <select id="select" v-model="store.selected" @change="$emit('filter')" >
                <option disabled value="">Seleziona un genere</option>
                <option  v-for="genre in store.genres" :value="genre.id">{{genre.name}}</option>
                
            </select>
        </div> -->

        <div class="item-list">
            <MovieItem
            v-for="currentMovie in store.movies" 
            :movie="currentMovie"
            @mouseenter="$emit('info')"
            >
            </MovieItem>
        
        
        </div>

        <h2>Tv Series</h2>


        <div class="item-list">
            <MovieItem
            v-for="currentTv in store.tvs" 
            :movie="currentTv"
            @mouseenter="$emit('info')"
            >
            </MovieItem>        
        
        </div>

        
    
        <!-- <div class="item-list">
            <TvItem
            v-for="currentTv in store.tvs"  
            :tv="currentTv"
            @mouseenter="$emit('tvInfo')"
            ></TvItem>

        </div> -->


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
    gap: 30px;
    overflow-x: auto;

    padding: 20px;
}





</style>