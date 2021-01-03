// extracted functions, will be separate folder like utils
function getRandomValue(min, max) {
    return Math.floor(Math.random() * (max - min)) + max;
};

const app = Vue.createApp({
	data() {
		return {
			playerHealth: 100,
            monsterHealth: 100,
            currentRound: 0,
            winner: null,
            logMessages: [],

		};
	},
	computed: {
		monsterBarStyles() {
            if( this.monsterHealth < 0 ) {
                return { width: '0%'}
            }
			return {
				width: this.monsterHealth + '%',
			};
		},
		playerBarStyles() {
            if (this.playerHealth < 0) {
				return { width: '0%' };
			}
			return {
				width: this.playerHealth + '%',
			};
        },
        mayUseSpecialAttack() {
			// will be available every 3rd round
			return this.currentRound % 3 !== 0;
		}
    },
    watch: {
        playerHealth(value) {
            if(value <= 0 && this.monsterHealth <=0){
                // a draw
                this.winner = 'draw';
            } else if (value <=0){
                this.winner = 'monster';
            }
        },
        monsterHealth(value) {
            if (value <= 0 && this.playerHealth <= 0) {
				this.winner = 'draw';
			} else if (value <= 0) {
				this.winner = 'player';
			}
        }
    },
	methods: {
        startGame() {
            this.playerHealth = 100;
            this.monsterHealth = 100;
            this.currentRound = 0;
            this.winner = null;
            this.logMessages = [];
        },
		attackMonster() {
			// Calculate random value between of mac 12 and min 5
            this.currentRound++;
            const attackValue = getRandomValue(5, 12);
            this.monsterHealth -= attackValue;
            this.addLogMessage('player', 'attack', attackValue);
			this.attackPlayer();
		},
		attackPlayer() {
			const attackValue = getRandomValue(8, 15);
            this.playerHealth -= attackValue;
            this.addLogMessage('monster', 'attack', attackValue);
        },
        specialAttackMonster() {
            // will be available every 3rd round
            this.currentRound++;
            const attackValue = getRandomValue(10, 25);
            this.monsterHealth -= attackValue;
            this.addLogMessage('player', 'attack', attackValue);
			this.attackPlayer();
        },
        healPlayer() {
            this.currentRound++;
            const healValue = getRandomValue(8, 20);
            if(this.playerHealth + healValue > 100) {
                this.playerHealth = 100;
            } else {
                this.playerHealth += healValue;
            }
            this.addLogMessage('player', 'heal', healValue);
            this.attackPlayer();
        },
        surrender() {
            this.winner = 'monster';
        }, 
        addLogMessage(who, what, value) {
            // unshift() add something on top of array, and 
            // push() add on bottom
			this.logMessages.unshift({
                actionBy: who,
                actionType: what,
                actionValue: value
            });
		}
	},
});

app.mount('#game');

