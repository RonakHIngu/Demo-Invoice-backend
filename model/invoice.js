const mongoose = require("mongoose");

var invoiceSchema = new mongoose.Schema({
    invoice: { type: Object, default: {} }
});

module.exports = mongoose.model("Invoice", invoiceSchema);