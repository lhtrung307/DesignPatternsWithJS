class EnemyTank {
  constructor() {
    this.generator = () => Math.floor(Math.random() * 10 + 1);
  }

  fireWeapon() {
    let attackDamage = this.generator();
    console.log(`Enemy tank does ${attackDamage} damage`);
  }

  driveForward() {
    let movement = this.generator();
    console.log(`Enemy tank moves ${movement} spaces`);
  }

  assignDriver(driverName) {
    console.log(`${driverName} is driving the tank`);
  }
}

module.exports = EnemyTank;
