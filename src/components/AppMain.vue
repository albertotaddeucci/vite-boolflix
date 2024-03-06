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
    <MovieItem 
    v-for="currentMovie in store.movies"  
    :movie="currentMovie"
    ></MovieItem>

    <TvItem 
    v-for="currentTv in store.tvs"  
    :tv="currentTv"
    ></TvItem>

</template>

<style>


</style>