const app = Vue.createApp({
	data() {
		return {
			name: 'Zoran',
			age: 37,
			favoriteNum: this.calcFavNum(),
			imgSrc:
				'https://cdn.pixabay.com/photo/2018/11/11/19/46/christmas-bauble-3809544_960_720.jpg',
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
