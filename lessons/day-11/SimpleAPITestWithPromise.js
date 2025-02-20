const todo1Endpoint = 'https://jsonplaceholder.typicode.com/todos/1';

fetch(todo1Endpoint)
    .then(getResponse)
    .then(function (todo) {
        console.log(todo);
        if (todo.completed) {
            console.log(`Task completed!`);
        } else {
            console.log(`Task is in progress!`);
        }
        console.log('Done Testing!');
        console.log('Next step');
        console.log('Other step');    
    })  

// Detail Implementation
function getResponse(rawResponse) {
    return rawResponse.json();
}

function validateResponse(todo) {
    console.log(todo);
    if (todo.completed) {
        console.log(`Task completed!`);
    } else {
        console.log(`Task is in progress!`);
    }

}

