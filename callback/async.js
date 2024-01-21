// const posts=[
//     {title:'Post One',body:'This is post one'},
//     {title:'Post two',body:'this is post two'}
// ];
// function getPosts(){
//     setTimeout(() =>{
//         let output='';
//         for (let i = 0; i < posts.length; i++) {
//             const post = posts[i];
//          output+=`<li>${post.title}</li>`
//         }
//         document.body.innerHTML=output;
//     },1000)
// }
// function createPost(post){
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             posts.push(post);
//             const error=false;
//             if(!error){
//                 resolve();
//             }else{
//                 reject('Error:something went wrong');
//             }
//         },2000)
//     });
// }
// async function init(){
//     await createPost({title:'Post three',body:'this is post three'});
//     getPosts();
// }
// init();

// async/await with fetch()
// console.log("ty")
// const p1=new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//         resolve('promise resolved value')
//     },5000)
     
// });
// const p2=new Promise((resolve,reject)=>{
// setTimeout(()=>{
//     resolve('Promise Resolved value')
// },10000)
// })
// async function handlePromise(){
//     const val=await p1;
//     console.log("Namaste Javascript")
//     console.log(val);

// const val2=await p2;
// console.log('Namaste Javascript 2')
// console.log(val2)
// }
// handlePromise();
// console.log('z')
async function fetchData() {
    try {
      console.log("Fetching data...");
      const result1 = await fetch("https://reqres.in/api/unknown/2");
      const data1 = await result1.json();
  
      console.log("Fetching more data...");
      const result2 = await fetch("https://api.example.com/data2");
      const data2 = await result2.json();
  
      console.log("Data received:", data1, data2);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  }
  
  // Call the async function
  fetchData();
  