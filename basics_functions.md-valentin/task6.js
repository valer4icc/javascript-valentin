function hello() {
  return "Hello, world!";
}

function callNTimes(num, funk) {
  for (let index = 0; index < num; index++) {
    console.log(funk());
  }
}

console.log(callNTimes(5, hello));