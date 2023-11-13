
const dogs = [{ name: 'Snickers', age: 2 }, { name: 'hugo', age: 8 }];

function makeGreen() {
    const p = document.querySelector('p');
    p.style.color = 'crimson';
    p.style.fontSize = '70px';
}

// Regular
console.log("Hello!");

// Interpolated
console.log("I am a %s string!", "💩");

// Styled
console.log("%c I am Some Great Text", "background: red; font-size: 50px;");

// warning!
console.warn("This is the Last Warning");

// Error :|
console.error("Error from Zubair!");

// Info
console.info("This the info for you");

// Testing
// This will only run when the given condition is false. If is it true nothing will happen
let p = document.querySelector('p');
console.assert(p.classList.contains("ouch"), "That is Wrong!")

// clearing
// It will clear the console.
// console.clear();

// Viewing DOM Elements
console.log(p);
console.dir(p)

// Grouping together
dogs.forEach(dog => {
    console.groupCollapsed(`${dog.name}`);
    console.log(`This is ${dog.name} and he is ${dog.age} Years old.`);
    console.log(`This is ${dog.name} and he is ${dog.age * 2} Years old.`);
    console.groupEnd(`${dog.name}`);
})

// counting
console.count("Zubair");
console.count("Zubair");
console.count("Ali");
console.count("Zubair");
console.count("Ali");
console.count("Ali");
console.count("Zubair");
console.count("Ali");

// timing
console.time("fetching data");
fetch("https://fakestoreapi.com/products").then(data => data.json()).then(data => {
    console.timeEnd("fetching data");
    console.log(data);
})

// table
console.table(dogs);