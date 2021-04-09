<template>
  <div class="m-auto">

<h1 class="text-2xl text-center mt-4 mb-2 "> My lodge Mates {{ noOfRoomMates}} </h1>
<ul> 
  <li class="flex justify-between " v-for="(members, index) in  roomMates" :key='members.name'>
    <!-- keep your keys absolute as possible and doesn't allow overiding -->
    
<div> 
      {{ members.name}}  
</div>  
 <button @click="remove(index)"> x </button>

  </li>
</ul> 
<!-- V-BIND -->
<!-- Talking about v-bind directives 
it is primarily used to bind anythihng to the DOM, so... 
-->
<!-- v-bind at wor k with jus ':' not dynamic -->
<!-- you can also make it dynamic -->
<!-- <input  :value="add"> <button>Add</button> -->
<!-- v-model -->
<form class=" mt-10" @submit.prevent="addMembers">
<input class="border pl-2 py-1 rounded border-green-800"  v-model="nameInput" placeholder="Type a room mate name" ref="newRoomMateRef"> 
<!-- v:on:click or @click -->  
<button class="border rounded px-5 py-1 text-white  bg-green-600" type="submit">Add Name</button> 
<br>

</form> 

</div>
</template>

<script>
import {computed, onMounted, ref} from 'vue'
export default {

  setup() {
    //everything hear in this composition API is absoulutely reactive
    // always use const for variables because you're never going to reassign em values again rather reactivie function "ref("")" will do its
    const newRoomMateRef = ref("")   
    const nameInput = ref('')
    const  attributes = 'value'
    let roomMates =  ref([
        {name:  'jovialcore'},
        {name: 'david'}, 
        {name:'elijah'},
        {name: 'williams'}, 
        {name:'sunday'},
  ]); 

console.log(roomMates);
  function remove(index) {   
    roomMates.value = roomMates.value.filter((names, i) => i !== index);
    }

  function addMembers() {
    if (nameInput.value == "") return;
     roomMates.value.push({name: nameInput.value});
     //use unshift to push list at the top of the array
      nameInput.value = "";
      }

//always remember to import the onMounted from "vue"
   onMounted(()=> {
    newRoomMateRef.value.focus();
   })

  const noOfRoomMates = computed({
    //automatically returning the value of roomates values
           get:() =>  roomMates.value.length,
          
        });
   //anything that you want to be used by the vuejs template you have to export em like so...
         return {roomMates, nameInput, attributes, remove, addMembers, newRoomMateRef, noOfRoomMates}// if you have the same object value u can just replace it with the single name

  },
 
     computed: {
    
//use parethtensis in your interpolation since it is a methodbecause computed properties can be used as data
  },

//it shoul dnot be an arrow function because arrow fuction does not support "this" keyword that shoul enable use refer to the other methonds in the object class(main object)
   methods: {
   
   },

}
</script>

<style>

</style>