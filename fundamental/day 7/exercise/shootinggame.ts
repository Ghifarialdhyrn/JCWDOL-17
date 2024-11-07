// // Specifications:
//  ○ Create a shooting game between two player
//  ○ Each player has three properties : name, health and power
//  ○ Each player will take turns to shooting
//  ○ Before shooting, players get a chance to get random items (health +10 or power +10)
//  ○ The game will continue until one of the players has health < 0
// In every turn :
//  ● Show each player status before shooting
//  ● Get random item for each player before shooting
//  ● Show each player status after shooting
//  ■ Show winner name

class ShootingGame {
  player1: Player;
  player2: Player;
  constructor(player1: Player, player2: Player) {
    this.player1 = player1;
    this.player2 = player2;
  }

  getRandomItem() {
    const items = ["health", "power"];
    const randomIndex = Math.floor(Math.random() * items.length);
    return items[randomIndex];
  }

  start() {
    while (this.player1.health > 0 && this.player2.health > 0) {
      this.player1.showStatus();
      this.player2.showStatus();
      const player1Item = this.getRandomItem();
      const player2Item = this.getRandomItem();
      this.player1.useItem(player1Item);
      this.player2.useItem(player2Item);
      this.player1.hit(this.player2.power);
      this.player2.hit(this.player1.power);
      this.player1.showStatus();
      this.player2.showStatus();
      if (this.player1.health <= 0) {
        console.log(`Winner is ${this.player2.name}`);
      } else if (this.player2.health <= 0) {
        console.log(`Winner is ${this.player1.name}`);
      }
    }
  }
}

class Player {
  name: string;
  health: number;
  power: number;

  constructor(name: string, health: number, power: number) {
    this.name = name;
    this.health = health;
    this.power = power;
  }

  hit(power: number) {
    this.health -= power;
  }

  useItem(item: string) {
    if (item === "health") {
      this.health += 10;
    } else if (item === "power") {
      this.power += 10;
    }
  }

  showStatus() {
    console.log(`Name: ${this.name}`);
    console.log(`Health: ${this.health}`);
    console.log(`Power: ${this.power}`);
  }
}

const player1 = new Player("Alex", 100, 10);
const player2 = new Player("Birkin", 100, 10);

const game = new ShootingGame(player1, player2);
game.start();
