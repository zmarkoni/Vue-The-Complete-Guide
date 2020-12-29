const app = Vue.createApp({
    data() {
        return {
			courseGoalA: 'Finish the course and learn Vue!',
			courseGoalB: 'M',
			vueLink: 'https://vuejs.org/',
		};
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