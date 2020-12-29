const app = Vue.createApp({
	data() {
		return {
			name: 'Zoran',
			age: 37,
			favoriteNum: this.calcFavNum(),
			imgSrc: 'https://images.app.goo.gl/sveymfceXKe31ynj8',
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
