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
            if (randomNumber < 0.5 ) {
                return 'Learn Vue!'
            } else {
                return 'Master vue!'
            }
        }
    }
});
app.mount('#user-goal');