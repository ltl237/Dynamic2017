console.log("Type user.attack() to user your attack!");
console.log("Type user.defend() to increase your health!");
console.log("Be fast, the enemy attacks every 2 seconds!");

var user = {
			health : 3,
			strength : 1,

			defend: function() {
				this.health += 1;
				console.log("You have " + this.health + " health points");
			},

			attack: function() {
				// this.strength += 1;
				enemy.cHealth -= 1;
				console.log("Enemy has " + enemy.cHealth + " health points");
			},

			// getStatus: function() {
			// 	if(this.health == 0) {
			// 		console.log("You dead");
			// 	}
			// }
			userDied: function(){
				if(user.health <= 0){
					return true;
				}
				else {
					return false
				}
				// else if(enemy.cHealth == 0){
				// 	console.log("You win!")
				// }
			}

		}
var enemy = {
			cHealth: 2,
			cStrength: 1,

			attack: function() {
				user.health --;
				console.log("ENEMY ATTACK, you have " + user.health + " health remaining");
			},

			cpuDied: function(){
				if(enemy.cHealth <= 0){
					return true;
				}
				else {
					return false
				}
			// getCpuStatus: function(){
			// 	if(cHealth == 0){
			// 		console.log("CPU DEAD! You win!")
			// 	}
			// }


			}
		}
// var attack = user.attack();
// var defend = user.defend();
function gameLoop(){
			// var userStatus = user.getStatus()
			// var cStatus = enemy.getCpuStatus()
			enemy.attack()
			if(user.userDied()){
				console.log("You are DED");
			} 
			
			if(enemy.cpuDied()){
				console.log("Hey you won!")
			}
			if(enemy.cpuDied() !== true && user.userDied() !== true) {
				setTimeout(gameLoop, 2000);
			}
			

		}

setTimeout(gameLoop, 2000);
// function gameLoop(){

	