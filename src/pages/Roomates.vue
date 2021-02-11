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
<input class="border pl-2 py-1 rounded border-green-800"  v-model="nameInput" placeholder="Type a room mate name" ref="roomMateRef"> 
<!-- v:on:click or @click -->  
<button class="border rounded px-5 py-1 text-white  bg-green-600" type="submit">Add Name</button> 
<br>

</form> 

</div>
</template>

<script>
export default {

  mounted() {

    console.log(this.$refs.roomMateRef);

  },
     computed: {
      noOfRoomMates() {
        return this.roomMates.length;
      },
//use parethtensis in your interpolation since it is a method
  },

//it shoul dnot be an arrow function because arrow fuction does not support "this" keyword that shoul enable use refer to the other methonds in the object class(main object)
   methods: {
    addMembers() {
    if (this.nameInput == "") return;
     this.roomMates.push({name: this.nameInput});
     //use unshift to push list at the top of the array
    this.nameInput = "";
    },

    remove(index) {   
    this.roomMates = this.roomMates.filter((names, i) => i !== index);

    console.log(this.roomMates);
    }
   },

   data(){
     return {
      
       nameInput: '',
       //I manipulated the binding to be dynamic...so you can change 4 e.g default value in your data/state toa attributes that reflcet in the value option
       attributes : 'value',
        roomMates: [
        {name:  'jovialcore'},
        {name: 'david'}, 
        {name:'elijah'},
        {name: 'williams'}, 
        {name:'sunday'},
  ],
   

   };
 },
}
</script>

<style>

</style>