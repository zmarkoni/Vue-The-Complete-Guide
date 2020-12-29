const app = Vue.createApp({
    data() {
        return {
            courseGoal: 'Finish the course',
            vueLink: 'https://vuejs.org/'
        }
    },
    methods: {
        outputGoal
    }
});
app.mount('#user-goal');