const mongoose = require('mongoose');
const MONGO_URI = "mongodb+srv://yousef123:yousef123@cluster0.rohy9cb.mongodb.net/?retryWrites=true&w=majority";

const connectDatabase = () => {
    mongoose.connect(MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
        .then(() => {
            console.log("Mongoose Connected");
        });
}

module.exports = connectDatabase;