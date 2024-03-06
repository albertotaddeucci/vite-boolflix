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

    <div class="item">
        
        <img :src="store.url + movie.poster_path" alt="">

        <div id="item-info">
    
            <div>
                Titolo: {{ movie.title }}

            </div> 
            <div>
                Titolo originale: {{ movie.original_title }}               
    
            </div>       
            <div>
                Lingua: {{ movie.original_language }}               
    
            </div>
            <div>
                Voto: {{ movie.vote_average }}

            </div>
    
            
        </div>

    </div>


</template>

<style lang="scss">

.item{
    position: relative;
    background-color: red;

    img{
        display: block;
    }
}

#item-info{
    
    position: absolute;
    top: 0;

    width: 100%;
    height: 100%;

    padding: 5px;
    margin-bottom: 5px;

    background-color: rgba(0, 0, 0, 0.5);
    color: white;
    opacity: 0;
    transition: opacity 0.2s linear;
    
    text-align: center;
}

#item-info:hover{
    opacity: 1;
}

#tv-info{
    border: 1px solid red;
    padding: 5px;
    margin-bottom: 5px;
}


</style>