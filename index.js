const express = require("express");
const app = express();
const cors = require("cors");
const session = require("express-session");
const bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.json());
app.use(
    session({
        secret: "Ini rahasia banget",
        resave: true,
        saveUninitialized: false,
        cookie: { maxAge: 1000 * 60 * 60 * 24 },
    })
);

app.set("views", __dirname);

const passport = require("./lib/passport");
app.use(passport.initialize());
app.use(passport.session());

app.use("/public", express.static("public"));
app.use(cors());

const port = process.env.PORT || 5000;

const authRouter = require("./router/auth");
const dashboardRouter = require("./router/dashboard");
const siswaRouter = require("./router/siswa");
const kelasRouter = require("./router/kelas");
const nilaiRouter = require("./router/nilai");

app.use(authRouter);
app.use(dashboardRouter);
app.use(kelasRouter);
app.use(siswaRouter);
app.use(nilaiRouter);

app.listen(port, () => {
    console.log("Server is running on port 5000");
});

module.exports = app;
