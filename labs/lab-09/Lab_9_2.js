/**
 * url: https://jsonplaceholder.typicode.com
 * Library: fetch
 * GET/POSTS
 * Please using ASYNC/AWAIT and thenable to solve this
 * 1. Allow user to input an userid and postId, print out that post content
 * 2. Print all posts for that user
 */

/***
 * Get a target post's content for user
 *  A. Check if user is existing
 *      1. Get all posts for the user
 * 
 *      const allPosts = getAllPostsFromUser(userId);
 *      const targetPostContent = filterPostContent(allPosts, targetPostId);
 *      
 *      2. Filter out the target post content
 *          if the postID is existing
 *              print out the post content
 *          else
 *              the postID is not found
 *  B. Print out user is not found
 */

const readline = require('readline-sync');
const POST_ENDPOINT = 'https://jsonplaceholder.typicode.com/posts';
const USER_ENDPOINT = 'https://jsonplaceholder.typicode.com/users';

// Run the main app
app();

function app() {
    let isPlaying = true;

    function loop() {
        if (!isPlaying) return;
        sprintAppMenu();
        const userOption = Number(readline.question('Enter the option: '));

        let action;
        switch (userOption) {
            case 1:
                action = getAllPostsFromUser();
                break;
            case 2:
                action = getPostContent();
                break;
            case 0:
                isPlaying = false;
                console.log('See you again!');
                return;
            default:
                console.log('Please choose a valid option.');
                action = Promise.resolve();
        }
        action.then(loop);
    }

    loop();
}

function sprintAppMenu() {
    console.log('===== Menu =====');
    console.log('1. Get all posts from user');
    console.log('2. Get a post content');
    console.log('0. Exit');

}

async function fetchUsers() {
    const response = await fetch(USER_ENDPOINT);
    const dataReponse = await response.json();
    return dataReponse;
}

async function validateUser(userId) {
    const allUsers = await fetchUsers();
    let userExists = false;
    allUsers.forEach((user) => {
        if (user.id === userId) {
            userExists = true;
        }
    });
    return userExists;
}

async function fetchPosts() {
    const response = await fetch(POST_ENDPOINT);
    const dataReponse = await response.json();
    return dataReponse;
}

async function validatePost(postId) {
    const allPosts = await fetchPosts();
    let postExists = false;
    allPosts.forEach((post) => {
        if (post.id === postId) {
            postExists = true;
        }
    });
    return postExists;
}

async function getAllPostsFromUser() {
    const userId = Number(readline.question('Enter the userId: '));
    const isValidUser = await validateUser(userId);
    if (!isValidUser) {
        console.log(`${userId} not found!`);
        return;
    }
    const posts = await fetchPosts();
    const userPosts = posts.filter((post) => post.userId === userId);
    if (userPosts.length === 0) {
        console.log(`UserId = ${userId} has no posts.`);
    } else {
        console.log(`All posts of userId = ${userId}:`, userPosts);
    }
}

async function getPostContent() {
    const userId = Number(readline.question('Enter the userId: '));
    const postId = Number(readline.question('Enter the postId: '));

    const isValidUser = await validateUser(userId);

    if (!isValidUser) {
        console.log(`${userId} not found!`);
        return;
    }

    const isValidPost = await validatePost(postId);

    if(!isValidPost){
        console.log(`${postId} not found!`);
        return;
    }

    const posts = await fetchPosts();
    const post = posts.find((post) => post.userId === userId && post.id === postId);
    if (!post) {
        console.log(`PostId = ${postId} not found for userId = ${userId}.`);
    } else {
        console.log('Post content:', post);
    }
}




