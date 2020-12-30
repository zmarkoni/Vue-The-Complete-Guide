let app = Vue.createApp({
    data() {
        return {
            userData: ''
        };
    },
    methods: {
        buttonHandler () {
            alert(Button Klicked)
        }
    }
}).mount('#assignment2');