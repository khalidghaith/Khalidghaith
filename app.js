var life = 100;
const name = 'Khalid';
var age = 25;

const wtf = null;

console.log(life)

life = life - 50;

console.log(life)
//----------------------------
// trying to make a function
function adder(num1, num2) {
    console.log(num1 + num2);
}
//testing functions
adder(5, 6)
adder(1000, 5)

//making a function that returns uppercase letters.
function toUpper(text) {
    const upperCased = text.toUpperCase();
    console.log(upperCased);
}

toUpper(name);

console.log(`My name is ${name} and i am ${age}`); // Here back ticks `` are used not '' or ""

//if else

if (20 > age > 18) {
    console.log("you are young dude!");
} else if (20 < age < 30) {
    console.log("you are old but gold!");
} else {
    console.log("yeah go ahead!")
}

//arrays

const schedule = ["wake up", "eat", "Film a video", "watch netflix"];

schedule.push("Hey a new item");
schedule.unshift("wakeup")

console.log(schedule + ", Index of eat =" + schedule.indexOf("eat"));

console.clear()
//Objects

const user = {
    userName: "Khalid",
    age: 33,
    married: true,
    purchases: ["phone", "car", "laptop"]
};
console.log(user);
// console.clear()

const toggler = document.querySelector(".navbar-toggler");

toggler.removeEventListener('click', function () {
    a
})

var myModal = document.getElementById('myModal')
var myInput = document.getElementById('myInput')

myModal.addEventListener('shown.bs.modal', function () {
    myInput.focus()
})