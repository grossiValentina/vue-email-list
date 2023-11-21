const { createApp } = Vue;

const app = createApp({
    data(){
        return{
            emailRandom: "",

        }
    },
    methods: {
        generateEmail(){
            axios
                 .get("https://flynn.boolean.careers/exercises/api/random/mail")
                 .then((resp) => {
                    console.log(resp.data.response);
                    this.emailRandom = resp.data.response;
                 });
        }

    }
    
}).mount("#app");