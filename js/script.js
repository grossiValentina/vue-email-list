const { createApp } = Vue;

const app = createApp({
    data(){
        return{
            emailRandom: [],

        }
    },
    
    methods: {
        generateEmail(){
            for (let i = 0; i < 10; i++) {

                axios

                 .get("https://flynn.boolean.careers/exercises/api/random/mail")
                 
                 .then((resp) => {
                    console.log(resp.data.response);
                    this.emailRandom.push(resp.data.response);
                 });
               
                
            }
        },

    },
    
}).mount("#app");