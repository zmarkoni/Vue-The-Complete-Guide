const app = Vue.createApp({
  data() {
    return {
		enteredGoalValue: '',
		goals: [],
		userData: {
			name: 'Zoki',
			age: 3,
		},
	};
  },
  methods: {
    addGoal() {
      this.goals.push(this.enteredGoalValue);
    },
    removeGoal(index) {
      // Remove goal with passed index
      this.goals.splice(index, 1);
    }
  }
});

app.mount('#user-goals');
