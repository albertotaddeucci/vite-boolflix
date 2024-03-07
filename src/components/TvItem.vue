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
    methods:{
        getFlag(flag){
            const url = "https://flagcdn.com/16x12/ua.png"
            const newUrl = url.slice(0,-6) + flag + ".png"
            return newUrl
        }
    }

        
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
                <img :src="this.getFlag(tv.original_language)" alt="">
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