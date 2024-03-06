<script>
import {store} from '../store.js'


export default {
    name: "MovieItem",
    
    props:{
        movie: Object,
    },

    data() {
        return {
            store,  
                     
            
        }
    },

        
}


</script>

<template>

    <div id="movie-info">


        <img :src="store.url + movie.poster_path" alt="">

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

#tv-info{
    border: 1px solid red;
    padding: 5px;
    margin-bottom: 5px;
}


</style>