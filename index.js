const posts = [
    { title: 'Post One', body: 'This is post one' },
    { title: 'Post Two', body: 'This is post two' },
  ];
  
  let lastActivityTime = null;
  
  function getPosts() {
    setTimeout(() => {
      let output = '';
      for (let index = 0; index < posts.length; index++) {
        const post = posts[index];
        output += `<li>${post.title}</li>`;
      }
      document.body.innerHTML = output;
    }, 1000);
  }
  
  function createPost(post) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        posts.push(post);
        updateLastUserActivityTime()
          .then((updatedTime) => {
            resolve(updatedTime);
          })
          .catch((err) => {
            reject(err);
          });
      }, 2000);
    });
  }
  
  function updateLastUserActivityTime() {
    return new Promise((resolve) => {
      setTimeout(() => {
        lastActivityTime = new Date();
        resolve(lastActivityTime);
      }, 1000);
    });
  }
  
  const deletePost = () => {
    return new Promise((resolve, reject) => {
      // Simulating successful deletion after 1 second
      setTimeout(() => {
        if (posts.length > 0) {
          posts.pop();
          resolve('Post deleted successfully');
        } else {
          reject('No posts to delete');
        }
      }, 1000);
    });
  };
  
  createPost({ title: 'Post Three', body: 'This is post three' })
    .then((updatedTime) => {
      console.log('Last Activity Time:', updatedTime);
      return getPosts();
    })
    .then(() => {
      return deletePost();
    })
    .then((deleteMessage) => {
      console.log(deleteMessage);
      return getPosts();
    })
    .catch((err) => {
      console.error(err);
    });
  