<template> 
<Appheader  />  
<div class="w-full flex">
<!-- <Roomates  /> -->

<Calender />
</div>

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
import Calender from "./components/Calender"

// import Roomates from './components/Roomates';

 export default {
//computed properties maintain their state. so thier values are usually cached.. unlike mthods..the change each time the template is rendered
components : {Appheader, Calender}
};

</script>