let memberController = module.exports;

memberController.home = (req, res) => {
    console.log("GET--Home");
    res.send("Home Pagedasiz")
}

memberController.signup = (req, res) => {
    console.log("POST--Signup");
    res.send("SignupPagedasiz")
}

memberController.login = (req, res) => {
    console.log("POST--Login");
    res.send("Login Pagedasiz")
}

memberController.logout = (req, res) => {
    console.log("GET--Logout");
    res.send("Logout Pagedasiz")
}