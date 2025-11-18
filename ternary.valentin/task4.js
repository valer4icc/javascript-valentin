function loginStatus(isLoggedIn) {
    return isLoggedIn == true ? "Welcome back!" : "Please log in"
}

console.log(loginStatus("Please log in"))