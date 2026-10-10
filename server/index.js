const express = require('express');
const mongoose = require("mongoose");
const cors = require('cors');
const blogRoute = require('./routes/blogsRoute');
const carRoute = require('./routes/carsRoute');
const premiumRoute = require('./routes/premiumRoute');
const addressRoute = require('./routes/addressRoute');
const driveRoute = require('./routes/driveRoute');
const messageRoute = require("./routes/messageRoute");
const cardRoute = require("./routes/cardRoute");
const app = express();


app.use(cors());
app.use(express.json());

mongoose.connect("mongodb://127.0.0.1:27017/realm")
    .then(console.log('mongo connected'))
    .catch((err) => {
        console.log(err)
    });

app.use("/server/blogs", blogRoute);
app.use("/server/cars", carRoute);
app.use("/server/premium", premiumRoute);
app.use("/server/address", addressRoute);
app.use("/server/message", messageRoute);
app.use("/server/drive", driveRoute);
app.use("/server/card", cardRoute);

app.listen(3001, () => {
    console.log("Local host is running")
});