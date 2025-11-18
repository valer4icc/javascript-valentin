function validUsername(username) {
    return username.length >= 4 ? "Valid" : "Too short"
}

console.log(validUsername("vik"))