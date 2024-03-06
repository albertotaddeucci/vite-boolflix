<script>
import {store} from '../store.js'


export default {
    name: "TvItem",
    
    props:{
        tv: Object,
    },

    data() {
        return {
            store,            
            
        }
    },

        
}


</script>

<template>

    <div id="tv-info">

        <img :src="store.url + tv.poster_path" alt="">

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