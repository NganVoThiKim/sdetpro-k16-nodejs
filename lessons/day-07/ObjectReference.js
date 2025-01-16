let teo = {
    name: "Teo",
    age: 18,
    // Nested object (lồng)
    bankAccount: {
        checking: {
            accountNumber: '123',
        },
        saving: {
            accountNumber: '321',
        }
    }
}


// let ti = teo;
// ti.name = "Ti";
// ti.bankAccount.accountNumber = "124";
// console.log(teo);
// console.log(ti);



// ? Create object -> Copy 1 object to the other object
// Shallow copy
// let tun = {...teo};
// tun.name = "Tun";
// tun.bankAccount.accountNumber = "124";
// console.log(teo);
// console.log(tun);



// Shallow copy - handle for nested obj as well
let to = JSON.parse(JSON.stringify(teo));
to.bankAccount.checking.accountNumber = "9999";
// console.log(teo);
// console.log(to);

console.log(Object.keys(teo));
console.log(Object.values(teo));
console.log(Object.entries(teo));

// Read mozilla 


