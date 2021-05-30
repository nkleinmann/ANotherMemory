const express = require("express");
const session = require("express-session");
const mongoose = require("mongoose");
const passport = require("passport");
require('dotenv').config();


const PORT = process.env.PORT || 3001;
const app = express();
const Auth0Strategy = require("passport-auth0");

const strategy = new Auth0Strategy(
    {
        domain: process.env.REACT_APP_AUTH0_DOMAIN,
        clientID: process.env.REACT_APP_AUTH0_CLIENT_ID,
        clientSecret: process.env.REACT_APP_AUTH0_CLIENT_SECRET,
        callbackURL: process.env.REACT_APP_AUTH0_CALLBACK_URL || "http://localhost:3000/callback"
    },
    function(profile, done) {
        return done(null, profile);
    }
);


passport.use(strategy);
app.use(express.urlencoded({ extended: true }));
app.use(express.json());


const login = {
    secret: "cards",
    cookie: {},
    resave: false,
    saveUninitialized: true
  };
  
  if (app.get("env") === "production") {
    login.cookie.secure = true;
    
}

// Connecting DB
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/Grandmas-Cards", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false
});

// Routes //
app.use(session(login));
// app.use(require("./routes/api.js"));


app.listen(PORT, () => {
    console.log(`App running on port ${PORT}`)
});