<template>

<div class="m-auto"> 
    
    <h1 class="text-2xl my-2 text-center"> Vue Calender </h1> 
    
<section class="mx-2">
    <h2 class="text-center font-bold"> {{  currentMonthName }}  {{ currentYear }}</h2>
</section>
    <section class="flex my-2">
            <p class=" text-center" style="width:14.28%" v-for="day in days  " :key="day"> {{ day }} </p>
     </section>

     <section class="flex flex-wrap">
           <p class="" style="width:14.25%;" v-for="num in startdate()" :key="num"> </p>

         <p 
         
         class="text-center" 
         style="width:14.28%;"  v-for="num in daysInMonth()" :key="num"
        
        :class="currentDateClass(num)" 

          > 
    {{ num }} 
         </p>
     </section>
     <section class="flex mt-2 justify-between">
         <button class="px-2 border rounded" @click="prev"> PREV </button>
         <button class="px-2 border rounded" @click="next"> NEXT</button>
          </section>
</div>
</template>

<script>
export default {

    data() {
        return {
            currentDate : new Date().getUTCDate(),
            currentMonth : new Date().getMonth(),
            currentYear : new Date().getFullYear(),
            days: ['Sun', 'Mon', 'Tue', 'Wed', 'Thur', 'Fri', 'Sat']
        } 
    },

    methods: {
            daysInMonth() {
                // const month = new Date().getMonth() + 1;
                return new Date(this.currentYear, this.currentMonth + 1, 0).getDate();
            },
        startdate() {
            return new Date(this.currentYear, this.currentMonth, 1).getDay();
        }, 
        next() { 
               //reset the month values           
        if (this.currentMonth == 11) {
                    //reset the month values
                this.currentMonth = 0;
                this.currentYear++;       
            }   
             else {
                this.currentMonth++; 
            }   
        },

         prev() {
            if (this.currentMonth == 0) {
                    //reset the month values
                this.currentMonth = 11;
                this.currentYear--;       
            }
             else {
               this.currentMonth--;
            }   
        },
        //compare the device date from date in calender
    currentDateClass (num) {

    const deviceDate = new Date().toDateString();

    const  calendarDate = new Date(this.currentYear, this.currentMonth, num).toDateString();

    console.log(deviceDate, calendarDate);

            return calendarDate == deviceDate ? 'text-yellow-600 border bg-black w-2'  : " ";
    }    
    },

    computed: {
        //this explains that, computed properties has already gotten the value for this before the code runs...so the values are basically cached
            currentMonthName() {
                return new Date(this.currentYear, this.currentMonth).toLocaleString('default', {month: "long"})
            },
          
        } 

}
</script>

<style>

</style>