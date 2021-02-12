<template>
<div class="flex flex-wrap w-full">
  <h1 class="w-full text-center my-3 text-3xl">MarkDown App </h1>
    <section class="flex  m-auto w-10/12 h-screen"> 
      <article class="w-1/2 border"> 

        <textarea class="w-full h-full" :value="text" @input="update"  ref="markDownRef"> 

        
        </textarea>
      
      <!-- we had to bid the value with text -->
      </article>
      <article class="w-1/2 border bg-gray-100" v-html="markedText"> 
  
      </article>
    </section>
</div>
</template>
 
<script>
import marked from "marked"
import debounce  from '../utilities/mixins/debounce'

export default {

mounted() {
  this.$refs.markDownRef.focus();
},

  beforeUpdate(){
    console.log('before the component/template was tampered with or before any initial update');
  },

  updated() {
    console.log('fiannallly updated')
  },

//finally go to know about mixins
  mixins: [debounce],

        data() {
          return {
            text: "",
          }
        },
      computed: { markedText() {
          return marked(this.text);
          }
        },


       methods: { update(e) {
         const task = () => (this.text = e.target.value);

         this.debounce(task, 500);
        },          

       }
   //pleases check utitlies/mixins for the magic
//mixins kind of merge mix other functions/methods in the other component to one   and mixins are resuable data, function/methods
//also worhty to note is that whenusing a method or property already in mixins and reasigning value to them in the imported component/module , vuejs will take preference of the function in the the file where you imorted it from.
} 
</script>

<style>

</style>