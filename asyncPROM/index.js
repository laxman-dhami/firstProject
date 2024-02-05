console.log('person1:shows ticket');
console.log('person2:shows ticket');

let preMovie = async () => {
  const promiseWifeBringingTicks = new Promise((resolve) => {
    setTimeout(() => {
      resolve('ticket');
    }, 3000);
  });

  const getPopcorn = new Promise((resolve) => {
    resolve('popcorn');
  });

  const addButter = new Promise((resolve) => {
    resolve('butter');
  });

  const getColdDrinks = new Promise((resolve) => {
    resolve('colddrinks');
  });

  try {
    let ticket = await promiseWifeBringingTicks;
    console.log(`wife:I have ${ticket}`);
    console.log('husband:we should go in');
    console.log('wife:no, I am hungry');

    let popcorn = await getPopcorn;
    console.log(`husband:I got some ${popcorn}`);
    console.log('husband:we should go in');
    console.log('wife:I need butter on my popcorn');

    let butter = await addButter;
    console.log(`husband:I got some ${butter} on popcorn`);
    console.log(`husband:anything else darling?`);
    console.log(`wife:I need colddrink`);

    let coldDrink = await getColdDrinks;
    console.log(`husband:I got colddrink`);
    console.log(`husband:anything else`);
    console.log(`wife:lets go we are getting late`);

    return ticket;
  } catch (error) {
    console.error('Error:', error);
  }
};

preMovie().then((m) => console.log(`person3:shows ${m}`));
console.log('person4:shows ticket');
console.log('person5:shows ticket');