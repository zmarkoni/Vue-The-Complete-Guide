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
        inputHandler() {
            this.userData = event.target.val
        }
    }
}).mount('#assignment');