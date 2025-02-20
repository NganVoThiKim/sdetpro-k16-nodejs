console.log('1. Chay toi nha thang Teo');
// setTimeout(function() {
//     console.log('2. Teo oi, uong cf khong');
// }, 2000);
//setTimeout(callBackFunction.bind(undefined,"Teo"), 1 * 1000);  
setTimeout(callBackFunction.bind({age: 18}, "Tun"), 1 * 1000);  
console.log('3. Chay toi quan cf');

function callBackFunction(name) {
    console.log(this.age);
    console.log(`2. ${name} oi, uong cf khong`);
    
}
