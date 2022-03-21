/* // Code your solutions in this file
let object = {
    Guadalupe: "Thank you, Guadalupe, for the wonderful surprise gift!",
    Ollie: "Thank you, Ollie, for the wonderful surprise gift!",
    Aki: "Thank you, Aki, for the wonderful surprise gift!"}


/* function writeCards(spy){
    /* for(let i=0; i < spy.lenght; i++){
      return spy ;
 /* A */

// just for loop examples

/* function loopThroughspy(){
    for (const property in object) {
        console.log(`${property}: ${object[property]}`);
      }
}
loopThroughspy()
/* 
const object = { a: 1, b: 2, c: 3 }; */
 /* for([initialization];[condition]; [iteration]) {
     [loop body]
 }
 */
// basic way of using looping 
/*  for (let age = 30; age < 40; age++) {
    console.log(`I'm ${age} years old. Happy birthday to me!`);
    debugger;
  } */

  // Using for loops with arrays 

  


const people = ["Guadalupe", "Ollie", "Aki"];
const surprise = 'surprise';



function writeCards(people, event) {
   return  people.map(name => `Thank you, ${name}, for the wonderful ${event} gift!`)
}

console.log(writeCards(names, "surprise"))
  


/* function countdown(number){
	let i = number;
	
	while(i >= 0){
        console.log(i)
		i--;
    }
		
}
 */
/* countdown(10) */

/* let countdown = 10;
while (countdown > 0){
    countdown--;
    console.log(countdown);
}
 */


function countDown(number) {
    /* let userCountDown = 0; */
    while (number >= 0) {
        console.log(number);
        number -=1;
    }
}

