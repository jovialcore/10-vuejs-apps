<template>
      <section class="text-center"> 
              <span class="cursor-pointer rounded-sm text-xl text-center text-red-600  bg-white p-2" @click="loginGoogle">      Login With Gooogle </span>
              </section>
</template>

<script>
import firebase from "../../utilities/firebase"
export default {
    methods: {
              loginGoogle() {

                var provider = new firebase.auth.GoogleAuthProvider()

                firebase.auth()
                .signInWithPopup(provider).then(()=> {
                    //once the reg is done, this particular method will emit the "close-login-from-google" and 
                    this.$emit("close-login-from-google") 
                })
                   
            }
    }
}
</script>

<style>

</style>