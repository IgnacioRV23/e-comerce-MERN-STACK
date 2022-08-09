const mongoose = require('mongoose');

module.exports.Database = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI, () => console.log('Database open connection'));
    } catch (error) {
        console.log(`Database error: ${error}`);
    }
};