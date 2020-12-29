const app = Vue.createApp({
	data() {
		return {
			name: 'Zoran',
			age: '37',
			futureAge: this.age + 5,
			favoriteNum: calcFavNum,
			imgSrc: 'https://unsplash.com/photos/2qzZubxw7WE',
		};
    },
    methods: {
        calcFavNum() {
            return Math.random();
        }
    }
}).mount('#assignment');
