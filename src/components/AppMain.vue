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

        <div class="item-list">
            <MovieItem
            v-for="currentMovie in store.movies"  
            :movie="currentMovie"
            ></MovieItem>
    
    
        </div>

        <h2>Tv Series</h2>
    
        <div class="item-list">
            <TvItem
            v-for="currentTv in store.tvs"  
            :tv="currentTv"
            ></TvItem>

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
    gap: 30px;
    overflow-x: auto;

    padding: 20px;
}





</style>