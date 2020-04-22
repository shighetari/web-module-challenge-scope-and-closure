// ⭐️ Example Challenge START ⭐️

/**
 * ### Challenge `processFirstItem`
 * 
 * @instructions
 * Implement a higher-order function called `processFirstItem`.
 * It takes two arguments:
 * @param stringList an array of strings.
 * @param callback function that takes a string as its argument.
 * @returns the result of invoking `callback` with the FIRST element in `stringList`.
 * 
 * Example of usage of this higher-order function:
 * Invoking `processFirstItem` passing `['foo', 'bar']` and `(str) => str + str`,
 * should return 'foofoo'.
*/
function processFirstItem(stringList, callback) {
  return callback(stringList[0])
}

// ⭐️ Example Challenge END ⭐️


///// M V P ///////

/* Task 1: `counterMaker`
 * Study the code for counter1 and counter2. Answer the questions below.
 * 
 * 1. What is the difference between counter1 and counter2?
 * 
 * 
 * counter1 invokes counterMaker()/ we assigned counterMaker() to the const counter1;
 * counter1 works with the counterMaker() and manipulates the return count++ that inside of that function, so counter() is its closure
 * 
 * counter2 doesn't work with the counterMaker() function AT ALL. It only grabs and manipulates the let count=0; that is defined above it
 *
 * 
 * 2. Which of the two uses a closure? How can you tell?
 * 
 * counter1 uses closure, because it goes back to counterMaker() which has another function inside of it that is used by counter1;
 * despite that return statement , we can still access it
 * SO counter() is its closure
 * 
 * 3. In what scenario would the counter1 code be preferable? In what scenario would counter2 be better? 
 *
 * counter 1 will be better for when we want to use counterMaker() somewhere else later
 * Or when we want to mimic Brit's examples, use counterMaker() multiple times by other consts 
 * for example: counter1=counterMaker() and then we want to use it again for something else so we create counter1a=counterMaker();
*
*counter2 will be better when we dont want to work with a function inside of a function, but access a variable defined outside of it and store its value.
*
 */


// counter1 code
function counterMaker() {
  
  let count = 0;
  return function counter() {
   return count++;
  }
}

const counter1 = counterMaker();

// console.log(counter1());
// console.log(counter1());
// console.log(counter1());
// counter2 code
let count = 0;

function counter2() {
  return count++;
}

// console.log(counter2());
// console.log(counter2());
// console.log(counter2());

/* Task 2: inning() 

Write a function called `inning` that generates a random number of points that a team scored in an inning.
 This should be a whole number between 0 and 2. */

function inning(/*Code Here*/){
    /*Code Here*/

    // const randomPoints = (Math.random()*2).toFixed(0);
    const randomPoints= Math.round(Math.random()*2);

    return randomPoints;
}

// console.log(inning());

/* Task 3: finalScore()

Write a higher order function called `finalScore` that accepts the callback function `inning`
 (from above) and a number of innings and and returns the final score of the game in the form 
 of an object.

For example, 

finalScore(inning, 9) might return: 
{
  "Home": 11,
  "Away": 5,
}

*/ 

function finalScore(callback, numberInnings/*code Here*/){
  /*Code Here*/
  let homeNumber=0;
  let awayNumber=0;

  for(let i=0; i<numberInnings; i++){
  //  console.log(callback())
   homeNumber=callback()+homeNumber;
   awayNumber=callback()+awayNumber;
  }

  const finalScoreObject={Home:homeNumber, Away:awayNumber}
     return finalScoreObject;

}

// console.log(finalScore(inning,9));
// console.log(finalScore(inning(),8));
/* Task 4: 

Create a function called `scoreboard` that accepts the following parameters: 

(1) Callback function `getInningScore`
(2) Callback function `inning`
(2) A number of innings

and returns the score at each pont in the game, like so:

1st inning: awayTeam - homeTeam
2nd inning: awayTeam - homeTeam
3rd inning: awayTeam - homeTeam
4th inning: awayTeam - homeTeam
5th inning: awayTeam - homeTeam
6th inning: awayTeam - homeTeam
7th inning: awayTeam - homeTeam
8th inning: awayTeam - homeTeam
9th inning: awayTeam - homeTeam

Final Score: awayTeam - homeTeam */

function scoreboard(cbGetInningScore, cbInning, inningNumber/* CODE HERE */) {
  /* CODE HERE */

  function getInningScore(){
 return cbGetInningScore(inning,1);
  }//I made a function that only returns the function finalScore of 1 round

let arrayAway=[]; //empty array-I'll put Away scores for each round here
let arrayHome=[]; 
let awayValue=0;
let homeValue=0;
for(let i=0; i<inningNumber; i++){
  arrayAway.push(getInningScore()['Away']);
  arrayHome.push(getInningScore()['Home']);

  if(i===0){
    // console.log(`${i+1}st inning: awayTeam ${arrayAway[i]} - homeTeam ${arrayHome[i]}`)
    awayValue+=arrayAway[i];
    homeValue+=arrayHome[i];
    console.log(`${i+1}st inning: awayTeam ${awayValue} - homeTeam ${homeValue}`)
  
  }else if(i===1){
  // console.log(`${i+1}nd inning: awayTeam ${arrayAway[i]} - homeTeam ${arrayHome[i]}`)
  awayValue+=arrayAway[i];
  homeValue+=arrayHome[i];
   console.log(`${i+1}nd inning: awayTeam ${awayValue} - homeTeam ${homeValue}`)
 
}else if(i===2){
// console.log(`${i+1}rd inning: awayTeam ${arrayAway[i]} - homeTeam ${arrayHome[i]}`)
awayValue+=arrayAway[i];
homeValue+=arrayHome[i];
console.log(`${i+1}rd inning: awayTeam ${awayValue} - homeTeam ${homeValue}`)

}else{
  // console.log(`${i+1}th inning: awayTeam ${arrayAway[i]} - homeTeam ${arrayHome[i]}`)
  awayValue+=arrayAway[i];
  homeValue+=arrayHome[i];
  console.log(`${i+1}th inning: awayTeam ${awayValue} - homeTeam ${homeValue}`)
 
}

}
// console.log(arrayAway + '       ' + arrayHome)    ---->checking how my Arrays look like

let finalScoreAway = arrayAway.reduce(function(accumulator, currentValue){
 return accumulator + currentValue;
},0);

let finalScoreHome = arrayHome.reduce(function(accumulator, currentValue){
  return accumulator + currentValue;
 },0);


return (`Final Score: awayTeam ${finalScoreAway} - homeTeam ${finalScoreHome}`); 
}

console.log(scoreboard(finalScore, inning, 9))
//finalScore takes in inning and number of rouns and returns a total score 
//inning makes 0,1 or 2
//number of rounds