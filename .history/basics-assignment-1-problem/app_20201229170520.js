const app = Vue.createApp({
	data() {
		return {
			name: 'Zoran',
			age: '37',
			futureAge: this.age + 5,
			favoriteNum: 0,
			imgSrc: 'https://unsplash.com/photos/2qzZubxw7WE',
		};
    },
    methods: {
        calcFavNum() {
            const randomNumber = Math.random();
			if (randomNumber < 0.5) {
				return this.courseGoalA;
			} else {
				return this.courseGoalB;
			}
        }
    }
}).mount('#assignment');
