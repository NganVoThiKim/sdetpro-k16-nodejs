/**
 * 1. Send request -> Get response | Asynchronous
 * 2. Process the response | Asynchronous
 * 3. Validate the response | Synchronous
 */

const url = 'taolaobidao';

sendRequest(url).then(function (response) {
    return processResponse(response);
    })
    .then(function (statusCode) {
        validateResponse(statusCode);
    })
    .catch(function (error) {
        console.log(error);
    });

function sendRequest(url) {
    console.log(`1. Sending request to the endpoint ${url}...`);
    return new Promise(function (resolve, reject) {
        setTimeout(function () {
            resolve({ status: 200 });
        }, 2 * 1000);
    })
}
function processResponse(response) {
    console.log(`2. Process the response...`);
    return new Promise(function (resolve, reject) {
        setTimeout(function () {
            resolve(response.status);
        }, 3 * 1000);
    })
}
function validateResponse(responseStatus) {
    console.log(`3. Validate the response...`);
    if (responseStatus === 200) {
        console.log(`PASS`);
    } else {
        console.log(`FAIL!`);
    }
}


