let app = Vue.createApp({
    data() {
        return {
            userData: ''
        };
    },
    methods: {
        buttonHandler() {
            alert('Button clicked!');
        }, 
        inputHandler(event) {
            this.userData = event.target.value;
        }
    }
}).mount('#assignment');