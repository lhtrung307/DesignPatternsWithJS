class EnemyRobotAdapter {
  constructor(enemyRobot) {
    this.enemyRobot = enemyRobot;
  }

  fireWeapon() {
    this.enemyRobot.smashWithHand();
  }

  driveForward() {
    this.enemyRobot.walkForward();
  }

  assignDriver(driverName) {
    this.enemyRobot.reactToHuman(driverName);
  }
}

module.exports = EnemyRobotAdapter;
