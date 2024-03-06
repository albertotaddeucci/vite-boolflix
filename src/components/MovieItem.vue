<script>
import {store} from '../store.js'


export default {
    name: "MovieItem",

    data() {
        return {
            store,
            
        }
    },

        
}


</script>

<template>

    <div id="movie-info" v-for="movie in store.movies">

        <div>
            Titolo: {{ movie.title }}
        </div>        
        <div>
            Lingua: {{ movie.original_language }}
        </div>
        <div>
            Voto: {{ movie.vote_average }}
        </div>
        


    </div>


</template>

<style>

#movie-info{
    border: 1px solid black;
    padding: 5px;
    margin-bottom: 5px;
}


</style>