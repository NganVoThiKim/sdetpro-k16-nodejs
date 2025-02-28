```js
userId = 1;
postId = 1;

// Functional Programming
const requestHandler = new RequestHandler(BASE_URL);
const post = await requestHandler.printTargetPost(userId, postId);
const allPosts = await requestHandler.printAllPosts(userId);