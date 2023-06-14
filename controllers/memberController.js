const Member = require("../ models/Member");

let memberController = module.exports;



memberController.signup = async (req, res) => {
    try {
        console.log("POST: cont/signup");
        const data = req.body,
        member = new Member(),
        new_member = await member.signupData(data );

        // TODO: AUTHENTICATE Based on JWT
        res.json({state: 'succeed', data: new_member});
    }catch(err) {
        console.log("ERROR: cont/signup");
        res.json({state: "fail", message: err.message})
    }
}

memberController.login = async (req, res) => {
    try {
        console.log("POST: cont/login");
        const data = req.body;
        const member = new Member();
        const new_member = await member.loginData(data);
        console.log(new_member);

        res.json({state: 'succeed', data: new_member});
    }catch(err) {
        console.log("ERROR: cont/login");
        res.json({state: "fail", message: err.message})
    }
}

memberController.logout = (req, res) => {
    console.log("GET--Logout");
    res.send("Logout Pagedasiz")
}