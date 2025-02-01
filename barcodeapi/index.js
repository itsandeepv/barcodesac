require("dotenv").config();
const express = require("express")
const app = express()
const cors = require("cors");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const { router } = require("./routes/allroutes");
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization');
    next();
});
app.use(cors({
    allowedHeaders: ['Authorization', 'Content-Type'],
    origin: '*',
}));
app.use("/uploads", express.static("uploads"));


app.use(express.urlencoded({ extended: true }));
const mongooseUrl = "mongodb+srv://sandeepverma:hrms-database@cluster0.20yfs0b.mongodb.net/hrmsdatabase"
// Connect to MongoDB
const connectToDatabase = async () => {
    try {
        await mongoose.connect(mongooseUrl, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log("Your DataBase is Connected successfully");
    } catch (err) {
        console.error("Unable to connect to MongoDB. Error: ", err);
    }
};

// Call database connection function
connectToDatabase();
app.use("/api",router)


// Start the server
const PORT = 8000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
