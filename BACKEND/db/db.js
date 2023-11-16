const mongoose = require('mongoose');
const {connect} = require ('mongoose');



async function dbConnexion() {
    try {
        await mongoose.connect('mongodb+srv://edenplanelle:kIo2mc7uckdLiui5@eden.n8lr2st.mongodb.net/');
        console.log("Database connection established");
    } catch (error) {
        console.error(error);
    }
}

module.exports = dbConnexion;
