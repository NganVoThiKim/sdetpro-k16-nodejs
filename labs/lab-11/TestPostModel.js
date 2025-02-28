const RequestHandler = require("./RequestHandler");
const readline = require('readline-sync');
// Excution
lab11();

// Function Declaration
async function lab11(){
    // Given params

    const userId = Number(readline.question("Input userId = "));
    const postId = Number(readline.question("Input postId = "));

    // Create RequestHandler object
    const POST_ENDPOINT = 'https://jsonplaceholder.typicode.com/posts';
    const requestHandler = new RequestHandler(POST_ENDPOINT);

    // const post = ...
    await requestHandler.printTargetPost(userId, postId);
    // const allPost = ...
    await requestHandler.printAllPosts(userId);


}
