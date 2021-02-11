<template> 
<!-- represent what you want it to do? from the oter component where you defined it-->
<Appheader  v-on:open-login-modal="isLoginOpen = true " />  

<div class="w-full flex">
<!-- <Roomates  /> -->

   <router-view> </router-view>


</div>
<!-- this  compnent will show only when the condition set for this component is true...so if its not, it negates to false... -->

<loginModal v-if="isLoginOpen" v-on:close-login="isLoginOpen = false" />

<!-- <input  :[attributes]="add"> <button :value="add"> add </button> -->

<!-- <p v-else  > ok the stuff you are doing is noot equal to 4  </p>
<h6 v-else-if=""> </h6> 
v-if,
v-text,
v-html,
v-else,
v-if, 
v-once: is a vue directive without any value, it prevents the re-rendering of data allowing it to render once!
v-for, for looping.
moustache syntax in vue js is usally referred to as text-interpolaton
--> 
</template>

 
<script>

import Appheader from "./components/Appheader"

import loginModal from "./components/loginModal"

import firebase from "./utilities/firebase";

// import router from "./route/router"


// import Roomates from './components/Roomates';

 export default {
        data() {
         return {
            isLoginOpen :false,
            // this is simply a state we created
            isSignedIn: false,
            authUser: {}
        }
    },

    mounted() {
     firebase.auth().onAuthStateChanged((user) => {
                    if(user) {
                        this.isSignedIn = true
                        this.authUser = user
                    } else {
                         this.isSignedIn = false
                         this.authUser = {}
                         }
                })
    },
//computed properties maintain their state. so thier values are usually cached.. unlike mthods..the change each time the template is rendered
components : {Appheader, loginModal}
};

</script>