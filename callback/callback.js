const posts=[
    {title:'Post One',body:'This is post one'},
    {title:'Post two',body:'this is post two'}
];
function getPosts(){
    setTimeout(() =>{
        let output='';
        for (let i = 0; i < posts.length; i++) {
            const post = posts[i];
         output+=`<li>${post.title}</li>`
        }
        document.body.innerHTML=output;
    },1000)
    
}
function createPost(post,callback){
    setTimeout(()=>{
     posts.push(post)
     callback()
    },2000)
}

createPost({title:'Post three',body:'this is post three'},getPosts)
