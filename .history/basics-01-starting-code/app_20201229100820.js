const app = Vue.createApp({
    data() {
        return {
            courseGoal: 'Finish the course',
            vueLink: 'http://vuejs.org/'
        }
    }
});
app.mount('#user-goal');