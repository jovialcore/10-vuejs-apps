<template>
   
 <div class="flex flex-wrap w-full relative">

     <div class="absolute w-full" v-for="(bgColor, index) in carousels"  :key="bgColor" > 


 <!-- this div below will display if the current carousel is truly equal to the index i.e number of carousels -->
 <transition name="fade"> 
 <div 
    v-if="currentCarousel == index" 
    :class="bgColor" 
    style="height:350px"> </div>
 </transition>

    </div>

 <div class=" w-full " style="height:340px ">
     <div class=" absolute bottom-0 w-full flex justify-center">
        <div v-for="(dot, index) in carousels" :key=  'dot' class="w-4 h-4 mx-2 rounded-full cursor-pointer shadow-md" :class="currentCarousel == index ? 'bg-gray-700' : 'bg-gray-300' " @click="keepActive(index)">
        </div>
     </div>
 </div>
        <!-- <div class="my-10 flex w-full border-red-400"> 
            <div class="m-auto">
                <transition name="fade"> 
                    <h1 v-if="isTitleShowing"> Slider carousel </h1>
                </transition>
                <button @click="isTitleShowing =  !isTitleShowing" class="px-2 rounded border"> Toggle </button>
            </div>
       </div> -->
 </div>
</template>

<script>
export default {

    methods: {
        keepActive(index) {
            this.currentCarousel = index;
        }
    },

     data(){
         return {
             currentCarousel : 0,
             interval: "",
             carousels:  ["bg-green-600", "bg-yellow-300", "bg-yellow-700"],
             isTitleShowing : true,
         }
     },
// mounting stuff 
     mounted() {
         this.interval = setInterval(() => {
//shortening the code 
        this.currentCarousel = this.currentCarousel == 2 ? 0 : this.currentCarousel + 1;
         
         }, 1000);
     },

//clearing the interval before unmounting it
     beforeUnmount() {
         clearInterval(this.interval); 
     }
}
</script>

<style>
.fade-enter-active,
.fade-leave-active {
  transition: all 1s ease;
}

.fade-enter-from{
      opacity: 0;
  transform: translateX(-100%)
}
.fade-leave-to {
  opacity: 0;
  transform: translateX(100%)
}
</style>