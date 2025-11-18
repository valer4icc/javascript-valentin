function maxOfTwo(num1, num2) {
    return num1 > num2 ? `${num1} biger` : num1 < num2 ? `${num2} biger` : num1 == num2 ? "jie ligus" : "eror"
}

console.log(maxOfTwo(7, 5))