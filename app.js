const STARTING_POKER_CHIPS = 100;
let players = 3;
let noOfStarterCards = 2;
let gameHasEnded = false;
/*
let myString1 = "Hello";
let myString2 = "World";

myString1 + myString2 + "!";
myString1 + " " + myString2 + "!";
myString1 + ", " + myString2 + "!";

`${ myString1 } ${ myString2 }!`
`${ myString1 }, ${ myString2 }!`
*/
let playerOneName = "Chloe"
let playerTwoName = "Jasmine";
let playerThreeName = "Jen";

console.log(`Welcome! 챔피언십 타이틀은 ${ playerOneName }, ${ playerTwoName }, ${ playerThreeName } 중 한 명에게 주어집니다. 각 선수들은 ${ STARTING_POKER_CHIPS }의 칩을 가지고 시작합니다.`);

let playerOnePoints = STARTING_POKER_CHIPS;
let playerTwoPoints = STARTING_POKER_CHIPS;
let playerThreePoints = STARTING_POKER_CHIPS;

playerOnePoints -= 50;
playerTwoPoints -= 25;
playerThreePoints += 75;

gameHasEnded = ((playerOnePoints + playerTwoPoints ) == 0) ||
               ((playerTwoPoints + playerThreePoints) == 0) ||
               ((playerOnePoints + playerThreePoints) == 0);

console.log("게임이 종료되었습니다: ", gameHasEnded);

function displayGreeting(){
    console.log('Hello, world!');
}
displayGreeting
