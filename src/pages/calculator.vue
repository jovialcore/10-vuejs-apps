<template>
  <section class="flex w-full">
      <div class="m-auto">
          <h1 class="text-2xl text-center"> calculator </h1>
          <p style="white-space:wrap;" class="text-3xl text-right mb-4 mt-8  h-10" > 
            {{ currentNum }}
       
          </p>
          <div class="h-10">
             <small v-if="selectedOperation" > {{ prevNum }} {{ selectedOperation }} 
            {{currentNum}}
          </small>
          </div>
          <div class="grid grid-cols-4 gap-0">
            <button @click="calculate('1')" class=" w-24 h-24 border  bg-green-700 text-white text-3xl "> 1</button>
            <button @click="calculate('2')" class=" w-24 h-24 border  bg-green-700 text-white text-3xl "> 2</button>
            <button @click="calculate('3')" class="p-2 w-24 h-24 border  bg-green-700 text-white text-3xl"> 3</button>
             <button @click="calculate('+')" class="p-2 w-24 h-24 border  bg-green-700 text-white text-3xl"> +</button>
            <button @click="calculate('4')" class="p-2 w-24 h-24 border  bg-green-700 text-white text-3xl"> 4</button>
            <button @click="calculate('5')" class="p-2 w-24 h-24 border  bg-green-700 text-white text-3xl"> 5</button>
             <button @click="calculate('6')" class="  p-2 w-24 h-24 border  bg-green-700 text-white text-3xl"> 6</button>
            <button @click="calculate('-')" class="  p-2 w-24 h-24 border  bg-green-700 text-white text-3xl"> -</button>
            <button @click="calculate('7')" class="p-2 w-24 h-24 border  bg-green-700 text-white text-3xl"> 7</button>
            <button @click="calculate('8')" class="p-2 w-24 h-24 border  bg-green-700 text-white text-3xl"> 8</button>
            <button @click="calculate('9')" class="p-2 w-24 h-24 border  bg-green-700 text-white text-3xl "> 9</button>
            <button @click="calculate('*')" class="p-2 w-24 h-24 border  bg-green-700 text-white text-3xl "> *</button>
             <button @click="calculate('c')" class="p-2 h-24 border  bg-green-700 text-white text-3xl" > c</button>
            <button @click="calculate('0')" class="p-2  h-24 border  bg-green-700 text-white text-3xl" > 0</button>
            
            <button @click="calculate('=')" class="p-2 w-24h-24 border  bg-green-700 text-white" > 
                =
            </button >
            <button @click="calculate('/')" class="p-2 w-24h-24 border  bg-green-700 text-white" > 
                /
            </button >

          </div>
      </div>
  </section>
</template>

<script>
import {onMounted, ref} from 'vue'
export default {
    setup(){
      // const result = ref(" ");
      const operands = ["+", "-", "*", "/"]
      const numbers = ["1","2","3","4","5","6","7","8","9","0"]
      const currentNum = ref("")
      const prevNum = ref("")
      const selectedOperation = ref("")//kind of stores the values so they don't exit!!!
//also means pressed(num/value)
      function calculate(num) {
        if(num == "=" || num == 'Enter') sum(); 
        else if (num == 'c') clear();
        else if (operands.includes(num)) useOperand(num);
        else if(numbers.includes(num)) appendDigitToResultField(num);
       
      }

      function sum () {
        if(selectedOperation.value == "*") multiply()
        else if(selectedOperation.value == "/") divide()
        else if(selectedOperation.value == "-") subtract()
        else if(selectedOperation.value == "+") add()
         prevNum.value = ""
         selectedOperation.value = ""
      }

    function multiply() {
      currentNum.value = prevNum.value * currentNum.value
    }
  function divide() {
      currentNum.value = prevNum.value / currentNum.value
    }
 function subtract() {
      currentNum.value = prevNum.value - currentNum.value
    }
  function add() {
      currentNum.value = +prevNum.value + +currentNum.value
    }
    //this is where the numbers are beign appended 
      function appendDigitToResultField(value) {
          currentNum.value = currentNum.value + value;  
      }
//when I hit any of the operands, set the value to preViousNum and clear the currentNUm, then assign the operand to selectedOperation; and do the major calculate
      function useOperand(num) {
        calculate();
        prevNum.value = currentNum.value;
        currentNum.value = "";
        selectedOperation.value = num;

      }
//to clear the digits
      function clear() {
        currentNum.value = "";
        prevNum.value ="";
        selectedOperation.value = "";
      }

onMounted (() => {
  window.addEventListener("keydown", (e)=> {
    calculate(e.key)
  })
})
      return {currentNum, calculate, operands, useOperand, clear, selectedOperation, prevNum}
    }

}
</script>

<style>

</style>