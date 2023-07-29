// Q4. Ans

// Asynchronous functions returning Promises
function getUser(userId) {
    return new Promise((resolve, reject) => {
      // Simulating an API call to fetch user data
      setTimeout(() => {
        const user = { id: userId, name: "John Doe", age: 30 };
        resolve(user);
      }, 1000);
    });
  }
  
  function getUserPosts(userId) {
    return new Promise((resolve, reject) => {
      // Simulating an API call to fetch user posts
      setTimeout(() => {
        const posts = [
          { id: 1, title: "First Post", body: "Hello World!" },
          { id: 2, title: "Second Post", body: "Promises are awesome!" },
        ];
        resolve(posts);
      }, 1500);
    });
  }
  
  function getPostComments(postId) {
    return new Promise((resolve, reject) => {
      // Simulating an API call to fetch comments for a post
      setTimeout(() => {
        const comments = [
          { id: 1, text: "Great post!" },
          { id: 2, text: "Thanks for sharing!" },
        ];
        resolve(comments);
      }, 2000);
    });
  }

  // Using Promise chaining
getUser(123)
.then((user) => {
  console.log("User:", user);
  return getUserPosts(user.id);
})
.then((posts) => {
  console.log("Posts:", posts);
  return getPostComments(posts[0].id);
})
.then((comments) => {
  console.log("Comments:", comments);
})
.catch((error) => {
  console.error("Error:", error);
});



