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
            flagName: jsonFlags,
            newUrl: "",
            
        }
    },

    methods:{
        getFlag(flag){   
            
            const key = flag
            if(this.flagName.hasOwnProperty(key)){
                const url = "https://flagcdn.com/32x24/ua.png"
                this.newUrl = url.slice(0,-6) + flag + ".png"
                
                return this.newUrl

            } else {
                return this.newUrl =""
            }            
             
        },

        getId(num){

            store.movieId = num
            
        }
    }



        
}


</script>

<template>

    <div class="item" @mouseenter="this.getId(movie.id)">
        
        <img :src="store.url + movie.poster_path" alt="">

        <div id="item-info">          
    
            <div class="label">
                Titolo: <span>{{ movie.title ? movie.title : movie.name }}</span>

            </div> 
            <div class="label">
                Titolo originale: <span>{{ movie.original_title ? movie.original_title : movie.original_name }}</span>               
    
            </div> 
            <div class="label language">
                <div v-show="this.newUrl !=''">
                    <img  :src="this.getFlag(movie.original_language)" > 

                </div>
                <div v-show="this.newUrl ==''">
                    Lingua: <span>{{ movie.original_language }} </span>              

                </div>     
                
    
            </div>      
            
            <div class="label center">
                <div class="cast">
                    Cast:
                    <span v-for="actor in store.movieCast"> {{ actor.name }}</span>
                    
                </div>
                
            </div>

            
            <div class="label vote">
                {{ movie.vote_average }}

            </div>
            
    
            
        </div>

    </div>


</template>

<style lang="scss">

.item{
    position: relative;
    width: 300px;

    img{
        width: 100%;
        object-fit: contain;
        display: block;
        
    }
}

#item-info{
        
    position: absolute;
    top: 0;

    width: 100%;
    height: 100%;

    padding: 15px;
    margin-bottom: 5px;

    background-color: rgba(0, 0, 0, 0.8);
    color: white;
    opacity: 0;
    transition: opacity 0.2s linear;
    
    .label{
        margin-bottom: px;
        color: red;
        span{
            color: white;            
            font-size: 1.2em;
        }
    }

    .label.center{
        padding-top: 20px;

        text-align: center;

        .cast{
            display: flex;
            flex-direction: column;
            gap: 10px;
        }
    }


    .label.language{
        display: flex;
        flex-direction: column;
        align-items: center;

        padding-top: 20px;
        img{
            // width: 16px;
        }
    }

    .label.vote{
        position: absolute;

        padding-bottom: 20px;
        bottom: 0px;
        left: 50%;
        transform: translateX(-50%);
    }



}

#item-info:hover{
    opacity: 1;
}



</style>