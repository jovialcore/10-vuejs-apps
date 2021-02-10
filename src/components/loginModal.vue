<template>

  <section @click="$emit('close-login')" class="z-20 h-screen w-screen bg-gray-400 fixed top-0 opacity-80 cursor-pointer"></section>

  <div class="absolute inset-0">
      <div class="flex h-full"> 
          <div class="z-30 m-auto text-white text-4xl p-3 bg-green-700 rounded shadow w-1/3">
              <h1 class="text-xl text-center "> login </h1>
              <form class="p-2 my-2" @submit.prevent="">
                  <div class="mb-4">
                    <label class="text-xl"> Email or Username </label>
 
                    <input
                    v-model="form.email"
                     class="rounded shadow p-2 w-full text-black text-xl" type="text" placeholder="Enter email"/>
                  </div>
                <div class="my-4">
                    <label class="text-xl"> Password </label>
                    <input
                     v-model="form.password"
                     class="rounded shadow p-2 w-full text-bla ck text-xl" type="password" placeholder="Please enter password"/>
                </div>
                <div class="my-4">
                    <button type="submit" class=" bg-white p-3 m-auto rounded shadow-md text-xl text-black"> Login </button>
                </div>
              </form>
          </div>
      </div>  
    </div> 

</template>

<script>
export default {

    data() {
    return {
        form: {
            email: "",
            password: "",
            }
        }
    },
    methods: {
        submit() {
            //submit the form
        }
    }

}
</script>

<style>

</style>