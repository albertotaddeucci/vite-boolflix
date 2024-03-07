<script>
import jsonFlags from '../data/all-flags.json'
import {store} from '../store.js'


export default {
    name: "TvItem",
    
    props:{
        tv: Object,
        
    },

    data() {
        return {
            store,   
            flagName: jsonFlags,
            newUrl: "",        
            
        }
    },
    methods:{
        getFlag(flag){   
            
            const key = flag
            if(this.flagName.hasOwnProperty(key)){
                const url = "https://flagcdn.com/16x12/ua.png"
                this.newUrl = url.slice(0,-6) + flag + ".png"
                
                return this.newUrl

            } else {
                return this.newUrl =""
            }

            
             
        },
        getId(num){
            store.tvId = num

        }
    }

        
}


</script>

<template>

    <div class="item" @mouseenter="this.getId(tv.id)">

        <img :src="store.url + tv.poster_path" alt="">

        <div id="item-info">
    
            <div>
                Titolo: {{ tv.name }}
            </div>        
            <div>
                Titolo originale: {{ tv.original_title }}               
    
            </div>       
            <div class="language">

                <div v-show="this.newUrl !=''">
                    <img :src="this.getFlag(tv.original_language)" > 

                </div>
                <div v-show="this.newUrl ==''">
                    Lingua: {{ tv.original_language }}               

                </div>     
                
    
            </div>
            <div>
                {{ tv.vote_average }}

            </div>
            <span v-for="actor in store.tvCast"> {{ actor.name }}</span>
    
        
            
            
        </div>

    </div>


    
    



</template>

<style>


</style>