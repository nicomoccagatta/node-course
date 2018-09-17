function longComputation() {
  let sum = 0;
  for (let i = 0; i < 1e10; i++) {
    sum += i;
  }
  return sum;
}

process.on("message", () => {
  const sum = longComputation();
  console.log("Child finished computation:", sum);
  process.send(sum);
  process.exit();
});