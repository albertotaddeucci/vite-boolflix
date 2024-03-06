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
    <div id="tv-info" v-for="tv in store.tvs">

        <div>
            Titolo: {{ tv.name }}
        </div>        
        <div>
            Lingua: {{ tv.original_language }}            
            

        </div>
        <div>
            Voto: {{ tv.vote_average }}
        </div>

    </div>  
    



</template>

<style>

#movie-info{
    border: 1px solid black;
    padding: 5px;
    margin-bottom: 5px;
}

#tv-info{
    border: 1px solid red;
    padding: 5px;
    margin-bottom: 5px;
}


</style>