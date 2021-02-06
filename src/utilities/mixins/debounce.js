export default  {

    data() {
        return{
    timeout :"",
        }
    },

    methods: {
        debounce(func, wait = 1000) {
            clearTimeout(this.timeout);
            this.timeout = setTimeout(func, wait)
            }
    }

  
                 /*what I did above which is t */
        //creating the debounce effect       
        //lets crate a resusable debounce function/method
        //set time out
        //lets check if thier was a previous timeout and then clear the other time out  
        
        //debounce method is reuseable because it doesnt actually care how you want to use it.
        //we have created the resusable funciton in a folder, utilitis/mixins...
}

