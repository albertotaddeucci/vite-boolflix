<script>
import jsonFlags from '../data/all-flags.json'
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

            
             
        }
    }



        
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
            <div class="language">

                <div v-show="this.newUrl !=''">
                    <img  :src="this.getFlag(movie.original_language)" > 

                </div>
                <div v-show="this.newUrl ==''">
                    Lingua: {{ movie.original_language }}               

                </div>     
                
    
            </div>
            <div>
                {{ movie.vote_average }}

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
    display: flex;
    flex-direction: column;
    gap: 20px;
    
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


    .language{
        display: flex;
        flex-direction: column;
        align-items: center;
        img{
            width: 16px;
        }
    }
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