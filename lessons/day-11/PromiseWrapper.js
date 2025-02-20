console.log('1. Chay toi nha thang Teo');
waitForResponse().then(goToTheCoffeeShop);

function goToTheCoffeeShop() {
    console.log('3. Chay toi quan cf');
    
}
// Wrap an asynchronous function to a promise
// MCP - Claude --> AI 
// pupeteer - AI tool

function waitForResponse() {
    return new Promise(wrapper);
}

function wrapper(resolve, reject) {
    setTimeout(function () {
        console.log(`2. Teo oi, uong cf khong`);
        resolve();
    }, 1 * 1000);

}

