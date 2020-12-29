const app = Vue.createApp({
	data() {
		return {
			name: 'Zoran',
			age: 37,
			favoriteNum: this.calcFavNum(),
			imgSrc: 'https://unsplash.com/photos/2qzZubxw7WE',
		};
	},
	methods: {
		calcFavNum() {
			return Math.random().toFixed();
		},
		calcFutureAge() {
			return this.age + 5;
		},
	},
}).mount('#assignment');
