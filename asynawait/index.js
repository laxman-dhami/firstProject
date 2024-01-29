// console.log('person1:shows ticket')
// console.log('person2:shows ticket')
// const promiseWifeBringingTickets=new Promise((resolve,reject)=>{
//   setTimeout(()=>{
//     resolve('ticket');
//   },3000)
// });

// const getPopcorn=promiseWifeBringingTickets.then((t)=>{
//   console.log('husband:we should go in')
//   console.log('wife:no i am hungry')
//   return new Promise((resolve,reject)=>{
//     resolve(`${t} popcorn`)
//   })
// })

// const getButter=getPopcorn.then((t)=>{
//   console.log('husband:we should go in');
//   console.log('wife:I need butter on my popcorn');
//   return new Promise((resolve,reject)=>{
//     resolve(`${t} butter`)
//   })
// })
// getButter.then((t)=>console.log(t));


// console.log('person4:shows ticket')
// console.log('person5:shows ticket')
console.log('person1:shows ticket')
console.log('person2:shows ticket')
let preMovie=async()=>{
  const promiseWifeBringingTicks=new Promise((resolve,rejects)=>{
    setTimeout(()=>{
      resolve('ticket')
    },3000)
  })
  const getPopcorn=new Promise((resolve,reject)=>{
    resolve(`popcorn`)
  })
  const addButter=new Promise((resolve,reject)=>{
    resolve(`butter`)
  })
  const getColdDrinks=new Promise((resolve,reject)=>{
    resolve(`colddrinks`)
  })
  let ticket=await promiseWifeBringingTicks;
  console.log(`wife:I have ${ticket}`)
  console.log('husband:we should go in')
  console.log('wife:no i am hungry')

  let popcorn=await getPopcorn;
  console.log(`husband:i got some ${popcorn}`)
  console.log('husband:we should go in')
  console.log('wife:I need butter on my popcorn')

  let butter=await addButter;
  console.log(`husband:i Got some ${butter} on popcorn`)
  console.log(`husband:anything else darling?`)
  console.log(`wife:i need colddrik`)
  
  let coldDrink=await getColdDrinks;
  console.log(`husband:i got colddrink`)
  console.log(`husband:anything else`)
  console.log(`wife:lets go we are getting late`)
return ticket;

}
preMovie().then((m)=>console.log(`person3:shows ${m}`));
console.log('person4:shows ticket')
console.log('person5:shows ticket')