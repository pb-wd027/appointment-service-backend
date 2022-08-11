const mongoose = require("mongoose");

mongoose.connect(process.env.MONGODB_URI);

const connection = mongoose.connection;

connection.on("connected", () => {
    console.log("MongoDB connection is successful");
});

connection.on('error', (error) => {
    console.log("Error is MongoDB connection", error);
});

module.exports = mongoose;