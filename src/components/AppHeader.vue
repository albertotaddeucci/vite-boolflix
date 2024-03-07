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

            <div id="logo">logo</div>

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