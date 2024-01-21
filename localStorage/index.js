const promiseWifeBringingTickets = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('ticket');
    }, 3000);
  });
};

const getPopcorn = async () => {
  const t = await promiseWifeBringingTickets();
  console.log('husband: we should go in');
  console.log('wife: no, I am hungry');
  return `${t} popcorn`;
};

const getButter = async () => {
  const t = await getPopcorn();
  console.log('husband: we should go in');
  console.log('wife: I need butter on my popcorn');
  return `${t} butter`;
};

const getColdDrinks = async () => {
  const t = await getButter();
  console.log('husband: we should go in');
  console.log('wife: I need a cold drink');
  return `${t} cold drink`;
};

const main = async () => {
  try {
    const finalOrder = await getColdDrinks();
    console.log('Final Order:', finalOrder);
  } catch (error) {
    console.error('Error:', error);
  }
};

main();
