// Javascript Lab 1 - Due November 5, 2020

const name = "Kim Hicks";
const age = 46;
const birthday = "March 7";
const detroitGC = true;
const lifeEvents = [
    "I was born in San Antonio, Texas.",
    "I went to Jackson State University.",
    "I am married with 2 children and 3 bonus children.",
    "I am excited to participate in the front-end bootcamp."
];

if (detroitGC) {
    console.log(`My name is ${name} and I am a student at Grand Circus in Detroit, Michigan. I am currently ${age} years old and my birthday is on ${birthday}.`);
} else {
    console.log(`My name is ${name} and I am a student at Grand Circus in Grand Rapids, Michigan. I am currently ${age} years old and my birthday is on ${birthday}.`);
}

for (let i = 0; i < lifeEvents.length; i++) {
    console.log(lifeEvents[i]);
}
    
let counter = 0;

while (counter >= 0) {
    let randomNumber = Math.floor(Math.random() * 10) + 1;
    // console.log(counter);
        if (randomNumber !== 5) {
            counter++;
            console.log(`${randomNumber} !== 5`);
        } else {
            counter++;
            console.log(`5 === 5. It took ${counter} iterations to randomly generate the number 5.`)
            break;
    }
}



