/**
 * url: https://jsonplaceholder.typicode.com
 * Library: fetch
 * GET/POSTS
 * Please using PROMISE and thenable to solve this
 * 9.1_Allow user to input an userid and postId, print out that post content
 * 9.2_Print all posts for that user
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

function fetchUsers() {
    return fetch(USER_ENDPOINT)
        .then((response) => response.json());
}

function validateUser(userId) {
    return fetchUsers().then((allUsers) => {
        let userExists = false;
        allUsers.forEach((user) => {
            if (user.id === userId){
                userExists = true;
            } 
        });
        return userExists ? Promise.resolve() : Promise.reject(`UserId = ${userId} not found.`);
    });
}

function fetchPosts() {
    return fetch(POST_ENDPOINT)
        .then((response) => response.json());
}

function validatePost(postId) {
    return fetchPosts().then((allPosts) => {
        let postExists = false;
        allPosts.forEach((post) => {
            if (post.id === postId){
                postExists = true;
            } 
        });
        return postExists ? Promise.resolve() : Promise.reject(`PostId = ${postId} not found.`);
    });
}

function getAllPostsFromUser() {
    const userId = Number(readline.question('Enter the userId: '));
    return Promise.all([fetchPosts(), validateUser(userId)])
        .then(([posts, ]) => {
            console.log(`${userId}`);
            
            const userPosts = posts.filter((post) => post.userId === userId);
                        
            if (userPosts.length === 0) {
                console.log(`UserId = ${userId} has no posts.`);
            } else {
                console.log(`All posts of userId = ${userId}:`, userPosts);
            }
        })
}
function getPostContent() {
    const userId = Number(readline.question('Enter the userId: '));
    const postId = Number(readline.question('Enter the postId: '));
 
    return Promise.all([validateUser(userId), validatePost(postId), fetchPosts()])
        .then(([, , posts]) => {
            const post = posts.find((post) => post.userId === userId && post.id === postId);

            if (!post) {
                console.log(`PostId = ${postId} not found for userId = ${userId}.`);
            } else {
                console.log('Post content:', post);
            }
        })
        .catch((error) => {
            console.error(error);
        });
}





// function handleUserOption(option) {
//     switch (option) {
//         case 1:
//             getAllPostsFromUser().then(() => console.log('Done!\n'));
//             break;
//         case 2:
//             getPostContent().then(() => console.log('Done!\n'));
//             break;
//         default:
//             console.log('Please choose a valid option.');
//     }
// }

// function getUserOption() {
//     return new Promise(function (resolve, reject) {
//         const userOption = Number(readline.question('Enter the option: '));
//         resolve(userOption);
//     });
// }

// function app() {
//     let isPlaying = true;
//     while (isPlaying) {
//         sprintAppMenu();
//         getUserOption().then(function (userOption) {
//             switch (getUser) {
//                 case 1:
//                     getAllPostsFromUser().then(app);
//                     break;
//                 case 2:
//                     getPostContent().then(app);
//                     break;
//                 case 0:
//                     isPlaying = false;
//                     break;
//                 default:
//                     console.log('Please choose the correct option');
//             }
//         })
//     }
// }

// function getAllPostsFromUser() {
//     const userId = Nummber(readline.question('Enter the userId: '));
//     return new Promise(function (resolve, reject) {
//         return getAllPostsFromUser(userId).then(function (allPosts) {
//             console.log(allPosts);
//             resolve(allPosts);
//         })
//     })
// }

// getAllPostsFromUser(userId)
//     .then(function (allPosts) {
//         // Synchronous start from here
//         const targetPostContent = filterPostContent(allPosts, targetPostId);
//         if (!targetPostContent) {
//             console.log(`The postId = ${targetPostId} is not found`);
//         } else {
//             console.log(targetPostContent);
//         }
//     })

// function getAllPostsFromUser(userId) {
//     return fetch(USER_ENDPOINT)
//         .then(function (response) {
//             return response.json();
//         })
//         .then(function (allUsers) {
//             let hasUser = false;
//             for (const user of allUsers) {
//                 if (user.id === userId) {
//                     hasUser = true;
//                     break;
//                 }
//             }
//             if (hasUser) {
//                 return fetch(POST_ENDPOINT)
//                     .then(function (response) {
//                         return response.json();
//                     })
//                     .then(function (allPosts) {
//                         return allPosts.filter(function (post) {
//                             return post.userId === userId;
//                         })
//                     })
//             } else {
//                 console.log(`UserId = ${userId} is not found`);
//                 process.exit(1);
//             }
//         })
// }
// function filterPostContent(allPosts, targetPostId) {
//     const targetPost = allPosts.find(function (post) {
//         return post.id === targetPostId;
//     })
//     return targetPost;

// }

// function getAllPostsFromUser() {
//     const userId = Number(readline.question('Enter the userId: '));

//     // if (isNaN(userId) || userId <= 0) {
//     //     console.log('Invalid userId. Please enter a valid number.');
//     //     return Promise.resolve();
//     // }

//     return fetchPostsByUser(userId)
//         .then(function (posts) {
//             if (posts.length === 0) {
//                 console.log(`UserId = ${userId} has no posts.`);
//             } else {
//                 console.log(`All posts from userId = ${userId}:`, posts);
//             }
//         })
// }
// function fetchPostsByUser(userId) {
//     return fetch(`${USER_ENDPOINT}`)
//         .then((response) => response.json())
//         .then((users) => {
//             if (!users.some((user) => user.id === userId)) {
//                 throw new Error(`UserId = ${userId} not found`);
//             }
//             return fetch(`${POST_ENDPOINT}?userId=${userId}`);
//         })
//         .then((response) => response.json());
// }
// function getPostContent() {
//     const userId = Number(readline.question('Enter the userId: '));
//     const postId = Number(readline.question('Enter the postId: '));

//     if (isNaN(userId) || userId <= 0 || isNaN(postId) || postId <= 0) {
//         console.log('Invalid input. Please enter valid numbers.');
//         return Promise.resolve();
//     }

//     return fetchPostsByUser(userId)
//         .then(function (posts) {
//             const post = posts.find(function (p) {
//                 return p.id === post});

//                 if (!post) {
//                     console.log(`PostId = ${postId} not found for userId = ${userId}.`);
//                 } else {
//                     console.log('Post content:', post);
//                 }
//             })
//     }
