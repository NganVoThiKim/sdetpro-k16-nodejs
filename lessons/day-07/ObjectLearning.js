// object = {key : value, function}
// Key: without spacing -> If key with spacing, special character -> Put it in " " -> Ex: "My-gender":'M'

// CREATE
let teo = {
    name: "Teo",
    age: 18,
    "my gender": 'M'
}
// READ
console.log(teo.name);
console.log(teo["my gender"]);

// UPDATE
teo.name = "Ti";
console.log(teo);

// Destructure (phân rã)
const { name, age, ["my gender"]: gender } = teo;

// Function ưith destructured params
function sayHello({name}) {
    console.log(`Hello there, my name is ${name}`);
}

// DELETE
delete teo.name;
console.log(teo);



