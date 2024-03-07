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

                <div id="logo">logo</div>
    
                <ul class="link-list">
                    <li>Home</li>
                    <li>Serie Tv</li>
                    <li>Film</li>
                    <li>Originali</li>
                    <li>Aggiunti di recente</li>
                    <li>La mia lista</li>
                </ul>

            </div>


            <div id="search-bar">
                <input type="search" v-model="store.movieToSearch" placeholder="search">
                <button @click="$emit('search')">Cerca</button>
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

}

#logo{
    color: white;
}

nav{
    background-color: black;
    padding-block: 30px;
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


</style>