function factorial(n) {
  if (n == 0 || n == 1) {
    return 1;
  } else {
    return n * factorial(n - 1);
  }
}
const n = 4;
let result = factorial(n);
console.log(`Factorial of ${n} is ${result}`);
