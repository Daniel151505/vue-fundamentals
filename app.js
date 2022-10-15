const app = Vue.createApp({
    // template: `
    // <h1> Hola Mundo </h1>
    // <p> Desde app.js </p>
    // `

    data() {
        return {
            quote: "I'm Spiderman",
            autor: "Peter Parker"
        }
    },

})

app.mount('#myApp')