const mongoose = require('mongoose');

module.exports.dbConnect = async () => {
    try {
        await mongoose.connect(process.env.DB_URL, { useNewUrlParser: true, useUnifiedTopology: true });
        console.log("Database has been connected");
    } catch (error) {
        console.log("Error connecting to database:", error.message);
    }
};
