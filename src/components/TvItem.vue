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

    <div class="item">

        <img :src="store.url + tv.poster_path" alt="">

        <div id="item-info">
    
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

    </div>


    
    



</template>

<style>


</style>