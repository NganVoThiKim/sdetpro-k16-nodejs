const Post = require('./Post');

class RequestHandler {
    constructor(baseUrl) {
        this._baseUrl = baseUrl;
    }
    async printTargetPost(userId, postId) {
        // 1. Send GET request on to / posts -> [{}]

        /** 2. Filter out the post for target userId
         *      .filter(function(post){
         *          return post.userId === userId;
         *      }) -> targetUserPosts = [{userId: 1,...}]
         **/
        /** 3. Filter out the target post
         * 
         **/
        const allUserPosts = await this._getAllPosts(userId);
        const targetPost = allUserPosts.filter(post => post.id === postId);
        console.log(`Target post with userId = ${userId} and postId = ${postId}: `, targetPost);


    }
    async printAllPosts(userId) {
        const allPosts = await this._getAllPosts(userId);
        console.log(`All posts of userId = ${userId}: `, allPosts);
    }

    async _getAllPosts(userId) {
        const response = await fetch(this._baseUrl);
        const posts = await response.json();
        return posts
            .filter(post => post.userId === userId)
            .map(post => new Post(post.userId, post.id, post.title, post.body));

    }
}
module.exports = RequestHandler;