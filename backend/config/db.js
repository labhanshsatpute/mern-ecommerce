const mongoose = require('mongoose');

module.exports = () => {
    const connectionParams = {
        useNewUrlParser: true,
        useUnifiedTopology: true
    };
    try {
        mongoose.connect(process.env.DB, connectionParams);
        console.log("Database Connected Successfully");
    } catch (error) {
        console.log("An Database Error Occured ");
    }
}