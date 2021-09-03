const express = require("express");
const router = express.Router();
const {
    getAllInvoice,
    addInvoice,
    getInvoiceDetail,
    updateInvoice,
    deleteInvoice
} = require("../controllers/invoice");

router.get("/getAllInvoice", getAllInvoice);
router.get("/getInvoiceDetail/:invoiceId", getInvoiceDetail);
router.post("/addInvoice", addInvoice);
router.put("/updateInvoice/:invoiceId", updateInvoice);
router.delete("/deleteInvoice/:invoiceId", deleteInvoice);

module.exports = router;