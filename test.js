const sleep1 = () => new Promise((resolve) => setTimeout(resolve, 1000));

const sleepN = async (n) => {
  for (let i = 0; i < n; i++) {
    await sleep1();
  }

  return n;
};

sleepN(10).then((n) => console.log(n));
