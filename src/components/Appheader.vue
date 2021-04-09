<template>
<nav class="w-full  bg-gray-600 text-white px-4 py-2"> 
    
 <router-link to="/" class="bg-green-400 p-5 text-1xl" > 10 Vue  js projects  </router-link>

<router-link v-for="item in list" :key="item.to" class="mx-2" :to="item.to"  > {{ item.title }} </router-link>


<button  v-if="isLoggedIn" class="mx-2" @click="logout">Logout </button>
<!-- once login button is clicked, listen and emit the event attached to it, this time, its "open-login-modal" -->
<button v-else class="mx-2" @click="$emit('open-login-modal')">Login </button>

</nav>
</template>
 
<script>
import firebase from "../utilities/firebase"
export default {
    //you can define the props type and enter your default boolean value
    // props : {"isLoggedIn": {type: Boolean, required: true}},
    props : {"isLoggedIn": {type: Boolean, required: true}},
  data() {
      return {
          list:  [

              {title:'Roomates', to:'/todo'},

              {title:'calender',to:'/calender'},

              {title:'markdown',to:'/markdown'},

              {title: 'carousel', to: '/carousel'},

              {title: 'calculator', to:'/calculator'}
          ]
      }
  },
  methods:{
      logout() {
          firebase
          .auth()
          .signOut().
          then(res => {console.log( res)})
          .catch(e => { console.log(e)});
      },
  }
}
</script>

<style>

</style>