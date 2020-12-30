let app = Vue.createApp({
    data() {
        return {
            userData: ''
        };
    },
    methods: {
        buttonHandler () {
            alert('Button clicked!');
        }
    }
}).mount('#assignment');