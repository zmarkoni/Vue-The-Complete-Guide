const app = Vue.createApp({
    data() {
        return {
            courseGoal: 'Finish the course',
            vueLink: 'https://vuejs.org/'
        }
    },
    methods: {
        outputGoal() {
            const randomNumber = Math.random();
            
        }
    }
});
app.mount('#user-goal');