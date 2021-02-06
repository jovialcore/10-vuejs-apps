<template>
   
 <div class="flex flex-wrap w-full">

<div  v-if="currentCarousel == 0" class="absolute w-full bg-green-600" style="height:350px"> </div>

<div v-if="currentCarousel == 1"  class="absolute  w-full bg-yellow-300" style="height:350px"> </div>

<div v-if="currentCarousel == 2"  class="absolute  w-full bg-yellow-700" style="height:350px"> </div>

   </div>
</template>

<script>
export default {

     data(){
         return {
             currentCarousel : 0,
             interval: "",
         }
     },
// mounting stuff 
     mounted() {
         this.interval = setInterval(() => {

             if(this.currentCarousel ==  2) {
                 this.currentCarousel = 0;
             }else {
                    this.currentCarousel++;
             }
         }, 1000);
     },

//clearing the interval before unmounting it
     beforeUnmount() {
         clearInterval(this.interval); 
     }
}
</script>

<style>

</style>