/***
 * [
 *  {
 *      UserId: Number,
 *      id: Number,
 *      title: string,
 *      body: string 
 *  },
 * ...
 * ]
 * -- Get a target post's content for user
 *  A. Check if user is existing
 *      1. Get all posts for the user
 *      2. Filter out the target post content
 *          if the postID is existing
 *              print out the post content
 *          else
 *              the postID is not found
 *  B. Print out user is not found
 * ////
 * A. Check if user is existing
 *      1. Get all posts for the user
 * --
 * const allPosts = getAllPostFromUser(userId);
 * const targetPostContent = filterPostContent(allPosts, postId);
 */
const readline = require('readline-sync');
const POST_ENDPOINT = 'https://jsonplaceholder.typicode.com/posts';
const USER_ENDPOINT = 'https://jsonplaceholder.typicode.com/users';

const userId = 11;
const targetPostId = 1;

let isPlaying = true;
while (isPlaying) {
    printAppMenu();
    const userOption = getUserOption();
    switch (userOption) {
        case 1:
            getAllPostFromUser(userId).then(function(){});
            break;
        case 2:
            getPostContent();
            break;
        case 0:
            isPlaying = false;
            break;
        default:
            console.log('Nhap lui Teo oi');

    }
}
function printAppMenu() {
    console.log('1. Get all posts from user');
    console.log('2. Get post content');
    console.log('0. Exit');
    
}

function getUserOption() {
    const userOption = Number(readline.question('Enter your option: '));
    return userOption;
}
function getAllPostFromUser(){
    const userId = Number(readline.question('Enter the user ID: '));
    getAllPostFromUser(userId).then(function (allPosts) {
        console.log(allPosts);
        
    })
}


getAllPostFromUser(userId)
    .then(function (allPosts) {
        //Synchronous start from here
        const targetPostContent = filterPostContent(allPosts, targetPostId);
        if (!targetPostContent) {
            console.log(`The Post with ID ${targetPostId} is not found`);

        } else {
            console.log(targetPostContent);
        }

    });



function getAllPostFromUser(userId) {
    return fetch(USER_ENDPOINT)
        .then(function (response) {
            return response.json();
        })
        .then(function (allUsers) {
            let hasUser = false;
            for (const user of allUsers) {
                if (user.id === userId) {
                    hasUser = true;
                    break;
                }
            }
            // Check if user is existing
            if (hasUser) {
                return fetch(POST_ENDPOINT)
                    .then(function (response) {
                        return response.json();
                    })
                    .then(function (allPosts) {
                        return allPosts.filter(function (post) {
                            return post.userId === userId;
                        });
                    });
            } else {
                console.log(`User with ID ${userId} is not found`);
                process.exit(1);
            }
        });

}

function filterPostContent(allPosts, targetPostId) {
    const targetPost = allPosts.find(function (post) {
        return post.id === targetPostId;
    });
    return targetPost;


}


