class EnemyRobot {
  constructor() {
    this.generator = () => Math.floor(Math.random() * 10 + 1);
  }

  smashWithHand() {
    let attackDamage = this.generator();
    console.log(`Enemy robot causes ${attackDamage} damage with its hands`);
  }

  walkForward() {
    let movement = this.generator();
    console.log(`Enemy robot walks forward ${movement} spaces`);
  }

  reactToHuman(driverName) {
    console.log(`Enemy robot tramps on  ${driverName}`);
  }
}

module.exports = EnemyRobot;
