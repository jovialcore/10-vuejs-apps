<template>
<nav class="w-full  bg-gray-600 text-white px-4 py-2"> 
    
    <router-link to="/" class="bg-green-400 p-5 text-1xl" > 10 Vue  js projects  </router-link>

<router-link v-for="item in list" :key="item.to" class="mx-2"  :to="item.to" > {{ item.title }} </router-link>



</nav>
</template>

<script>
export default {
  data() {
      return {
          list:  [

              {title:'Roomates', to:'/todo'},

              {title:'calender',to:'/calender'},

                 {title:'markdown',to:'/markdown'},

                 {title: 'carousel', to: '/carousel'}
          ]
      }
  }
}
</script>

<style>

</style>