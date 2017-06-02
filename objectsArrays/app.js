/**
 * Created by shane on 4/25/17.
 */

// strings, numbers, and booleans are copied
let age = 100;
let age2 = age;
console.log(age, age2); // 100, 100
age = 200;
console.log(age, age2); // 200, 100

let name = 'Shane';
let name2 = name;
console.log(name, name2);
name = 'Oston';
console.log(name, name2);

// arrays
const players = ['Shane', 'Marlon', 'Ash', 'Lukasz'];
const team = players;
console.log(players, team); // same arrays

team[3] = 'Bilal';
console.log(players, team); // original array changed (by reference)

const team2 = players.slice();  // copies array to a new array
team2[3] = 'Matt';
console.log(team, team2); // two different arrays

const team3 = [...players];
console.log(team3);
team3[3] = 'Dominic';
console.log(team, team3);

const team4 = Array.from(players);

// objects
const person = {
    name: 'Wes Bos',
    age: 80
};
const captain = person;
// captain.number = 99;
// console.log(person, captain); // adds number to person and,, by ref, captain

const captain2 = Object.assign({}, person, { number: 99, age: 12 });
console.log(person, captain2); // different objects

// one level deep...
const shane = {
    name: 'Shane',
    age: 100,
    social: {
        twitter: '@shaneoston',
        facebook: 'shaneoston'
    }
};
console.clear();
console.log(shane);


const peep = Object.assign({}, shane);
peep.name = 'Oston';

// use clone deep if you need it

// hacky method
const dev2 = JSON.parse(JSON.stringify(shane));



