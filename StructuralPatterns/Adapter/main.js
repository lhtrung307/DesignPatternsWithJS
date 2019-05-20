let EnemyRobot = require("./EnemyRobot");
let EnemyRobotAdapter = require("./EnemyRobotAdapter");
let EnemyTank = require("./EnemyTank");

let enemyTank = new EnemyTank();
let enemyRobot = new EnemyRobot();
let robotAdapter = new EnemyRobotAdapter(enemyRobot);

console.log("The robot");
enemyRobot.reactToHuman("Paul");
enemyRobot.walkForward();
enemyRobot.smashWithHand();

console.log("Enemy tank");
enemyTank.assignDriver("Mark");
enemyTank.driveForward();
enemyTank.fireWeapon();

console.log("The robot with adapter");
robotAdapter.assignDriver("Mike");
robotAdapter.driveForward();
robotAdapter.fireWeapon();
