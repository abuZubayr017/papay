const express = require("express");
const app = express();
const router = require("./router");
const router_bssr = require("./router_bssr");
const cookieParser = require("cookie-parser");

let session = require("express-session");
const MongodbStore = require("connect-mongodb-session")(session);
const store = new MongodbStore({
    uri: process.env.MONGO_URL,
    collection: "session",
});

// Kirish Code
app.use(express.static("public"));
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(cookieParser());


// Session Code
app.use(
    session({
        secret: process.env.SESSION_SECRET,
        cookie: {
            maxAge: 1000 * 60 * 30, // for 30 minutes
        },
        store: store,
        resave: true,
        saveUninitialized: true,
    })
);

app.use(function(req, res, next) {
    res.locals.member = req.session.member;
    next();
})

// Views Code
app.set("views", "views");
app.set("view engine", "ejs");


// Routing Code
app.use("/resto", router_bssr);
app.use("/", router);


module.exports =app;