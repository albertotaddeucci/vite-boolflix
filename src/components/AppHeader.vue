<script>

import {store} from '../store.js'


export default {
    name: "AppHeader",    

    data(){
      return{
         store,    
                  

      }
    },

    

    
}


</script>

<template>

    <nav>
        <div class="container">

            <div class="left-nav">

                <div id="logo">
                    <img src="/img/c889f5a620a7714ff1d7ba890a24079d.png" alt="">
                </div>
    
                <ul class="link-list">
                    <li @click="$emit('home')">Home</li>
                    <li>Serie Tv</li>
                    <li>Film</li>
                    <li>Originali</li>
                    <li>Aggiunti di recente</li>
                    <li>La mia lista</li>
                </ul>

            </div>


            <div class="right-nav">
                <div id="search-bar">
                    <input type="search" v-model="store.movieToSearch" placeholder="search">
                    <button @click="$emit('search')">Cerca</button>
                </div>

                <div>
                    <img src="/img/netflix-profile-pictures-1000-x-1000-88wkdmjrorckekha.jpg" alt="">
                </div>


            </div>

        </div>


    </nav>

    

</template>

<style lang="scss" scoped>
@use '../styles/mixins' as *;

.container{
    display: flex;
    align-items: center;
    justify-content: space-between;

    .left-nav{
        display: flex;
        align-items: center;
    }

    .link-list{
        margin-left: 70px;
        color: white;
        display: flex;
        list-style: none;
        gap: 20px;

        li{
            opacity: 0.5;
            transition: 0.1s linear;
        }

        li:hover{
            opacity: 1;
            cursor: pointer;
        }
    }

    .right-nav{
        display: flex;
        gap: 40px;
        align-items: center;
        img{
            width: 50px;
            cursor: pointer;
        
            &:hover{
                opacity: 0.8;
            }
        }
    }

}

#logo{
    color: white;
    img{
        width: 200px;
        
    }
}

nav{
    background-color: black;
    padding-block: 5px;
}

#search-bar{
    input{
        padding: 10px;
        margin-right: 10px;
    }

    button{
        @include btn_primary
    }

}


@media only screen and (max-width: 1200px) {

    li:not(:first-of-type){
        display: none;
    }
  
}



</style>