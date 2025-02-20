/**
 * 1. Send request -> Get response | Asynchronous
 * 2. Process the response | Asynchronous
 * 3. Validate the response | Synchronous
 */

const url = 'taolaobidao';

// Handle asynchronous | Callback Hell
sendRequest(url, function (response) {
    // {status: 200}
    processResponse(response, function (statusCode) {
        // statusCode = 200
        validateResponse(statusCode);
        
    });
});

// Mimic Asynchronous
function sendRequest(url, callBackFn) {
    console.log(`1. Sending request to the endpoint ${url}...`);
    setTimeout(function () {
        callBackFn({ status: 200 });
    }, 2 * 1000);
}

// Mimic Asynchronous
function processResponse(response, callBackFn) {
    console.log(`2. Process the response...`);
    setTimeout(function () {
        callBackFn(response.status);
    }, 3 * 1000);
}
// Mimic Synchronous
function validateResponse(responseStatus) {
    console.log(`3. Validate the response...`);
    if (responseStatus === 200) {
        console.log(`PASS`);
    } else {
        console.log(`FAIL!`);
    }
}


