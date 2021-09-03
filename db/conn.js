const mongoose = require("mongoose");
const DbURI = process.env.ATLAS_URI;

module.exports = {
    connectToServer: async function () {
        mongoose.connect(DbURI, { useNewUrlParser: true, useUnifiedTopology: true, });
        const db = mongoose.connection;
        db.on("error", function(){
            console.error("Failed to connect DB")
        });
        db.once("open", function(){
            console.log("Db connected Successfully!")
        });
        return db;
    },
};