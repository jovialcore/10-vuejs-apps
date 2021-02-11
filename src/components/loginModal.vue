<template>

  <section @click="$emit('close-login')" class="z-20 h-screen w-screen bg-gray-400 fixed top-0 opacity-80 cursor-pointer"></section>

  <div class="absolute inset-0">
      <div class="flex h-full"> 
          <div class="z-30 m-auto text-white text-4xl p-3 bg-green-700 rounded shadow w-1/3">
              <h1 class="text-xl text-center "> login </h1>
               <form class="p-2 my-2" @submit.prevent="submit">
                  <div class="mb-4">
                    <label class="text-xl"> Email or Username </label>
 
                    <input
                    v-model="email"
                     class="rounded shadow p-2 w-full text-black text-xl" type="text" placeholder="Enter email"/>
                  </div>
                <div class="my-4">
                    <label class="text-xl"> Password </label>
                    <input
                     v-model="password"
                     class="rounded shadow p-2 w-full text-black text-xl" type="password" placeholder="Please enter password"/>
                </div>
                <div class="my-4">
                    <button @click="loading" type="submit" class=" bg-white p-3 m-auto rounded shadow-md text-xl text-black"> 
                        <!-- if it's not loading, false  --true, v-if acts on a conditional basis like.. it goes for what ever that is conditional and will render what it finds true against ehat it finds false-->
                        <span v-if="!isInProgress"> Login </span>
                        <!-- if it is loading, true -->
                        <span v-if="isInProgress"> Loading...
                        </span>    
                    </button>
                </div>
              </form>
          </div>
      </div>  
    </div> 

</template>

<script>
 import firebase from '../utilities/firebase'
export default {


    data() {
    return {
    
            email: "jovialcore@gmail.com",
            password: "jovialcore",
            isInProgress : false
        }
    },
    methods: {
        loading() {
            this.isInProgress = true
        },
         submit() { 
             this.isInProgress = true;
             firebase.auth().signInWithEmailAndPassword(this.email, this.password).then(res => {
                 this.email = ""
                 this.password = ""
                 this.isInProgress = false
                 this.close()
             console.log(res)
           }).catch(e => {
                this.email = ""
                 this.password = ""
                 this.isInProgress = false
                 this.close()
                  console.log(e)
                })
            },

            close() {
                this.$emit("close-login")
            }
        }

}
</script>

<style>

</style>