// import connectDB from "./db/index.js";
const connectDB = require("./db/index.js");

const cors = require("cors");

const express = require("express");

const User = require("./model/User.js");

const multer = require("multer");

const app = express();

const storage = multer.diskStorage({
    destination: function (req, res, cb) {
        cb(null, "./uploadedImages");
    },
    filename: function (req, file, cb) {
        const ext = path.extname(file.originalname);
        const fileName = Date.now() + ext;
        cb(null, fileName);
        console.log(file);
    }
})

const upload = multer({ storage: storage });

app.post("/profileImage",upload.single("profileImage"), async (req, res) => {
    const profileImage = req.file.filename;
    console.log(profileImage);
} )

//added cors
app.use(cors({ origin: process.env.CORS_ORIGIN }));
//added express middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// app.get("/health", async (req, res) => {
//   const data = await User.find();
//   await User.create({
//     firstName: "Rahul",
//     lastName: "Kumar",
//     email: "harshil@gmail.com",
//     mobile: 1234567890,
//     password: "123456",
//     imageURL: "https://www.google.com",
//     userName: "harshil",
//   });
//   // res.json("hitt");
//   res.json(data);
// });
// console.log()

//importing user and place routes
const userRoute = require("./routes/user.route.js");
const placeRoute = require("./routes/place.route.js");
const HandleLogin = require("./controller/loginHandler.js");

//implementing user and place routes
app.use("/user", userRoute);
app.use("/place", placeRoute);
app.post("/login", HandleLogin);



module.exports = app;
