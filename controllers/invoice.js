const InvoiceSchema = require("../model/invoice");
const {
    successMessages,
    errorMessages
} = require("../common/constants");

const getAllInvoice = async function (req, res) {
    let response = { success: false, message: errorMessages.SERVER_ERROR_TRY_AGAIN };
    try {
        let invoices = await InvoiceSchema.find({});
        res.json({
            success: true,
            message: successMessages.GET_ALL_INVOICE,
            invoices
        });
    } catch (error) {
        console.error("error : ", error);
        response.message = error && error.message ? error.message : response.message;
        let status_code = error && Number.isInteger(error.status_code) ? Number(error.status_code) : (error && Number.isInteger(error.code) ? Number(error.code) : 500);
        res.status(status_code).json(response);
    }
}

const getInvoiceDetail = async (req, res) => {
    let response = { success: false, message: errorMessages.SERVER_ERROR_TRY_AGAIN };
    try {
        let invoiceDetail = await InvoiceSchema.findById(req.params.invoiceId);
        res.json({
            success: true,
            message: successMessages.GET_INVOICE_DETAIL,
            invoiceDetail
        });
    } catch (error) {
        console.error("error : ", error);
        response.message = error && error.message ? error.message : response.message;
        let status_code = error && Number.isInteger(error.status_code) ? Number(error.status_code) : (error && Number.isInteger(error.code) ? Number(error.code) : 500);
        res.status(status_code).json(response);
    }
}

const addInvoice = async (req, res) => {
    let response = { success: false, message: errorMessages.SERVER_ERROR_TRY_AGAIN };
    try {
        const newInvoiceSchema = new InvoiceSchema({
            invoice: req.body.invoice
        });
        await newInvoiceSchema.save().then(async () => {
            res.json({
                success: true,
                message: successMessages.INVOICE_ADDED
            });
        }).catch((error) => {
            throw error;
        });
    } catch (error) {
        console.error("error : ", error);
        response.message = error && error.message ? error.message : response.message;
        let status_code = error && Number.isInteger(error.status_code) ? Number(error.status_code) : (error && Number.isInteger(error.code) ? Number(error.code) : 500);
        res.status(status_code).json(response);
    }
}

const updateInvoice = async (req, res) => {
    let response = { success: false, message: errorMessages.SERVER_ERROR_TRY_AGAIN };
    try {
        const invoiceDetail = await InvoiceSchema.findByIdAndUpdate(req.params.invoiceId, req.body, { new: true })
        res.json({
            success: true,
            message: successMessages.INVOICE_UPDATED,
            invoiceDetail
        });
    } catch (error) {
        console.error("error : ", error);
        response.message = error && error.message ? error.message : response.message;
        let status_code = error && Number.isInteger(error.status_code) ? Number(error.status_code) : (error && Number.isInteger(error.code) ? Number(error.code) : 500);
        res.status(status_code).json(response);
    }
}

const deleteInvoice = async (req, res) => {
    let response = { success: false, message: errorMessages.SERVER_ERROR_TRY_AGAIN };
    try {
        await InvoiceSchema.findByIdAndDelete(req.params.invoiceId);
        res.json({
            success: true,
            message: successMessages.INVOICE_DELETED
        });
    } catch (error) {
        console.error("error : ", error);
        response.message = error && error.message ? error.message : response.message;
        let status_code = error && Number.isInteger(error.status_code) ? Number(error.status_code) : (error && Number.isInteger(error.code) ? Number(error.code) : 500);
        res.status(status_code).json(response);
    }
}

module.exports = {
    getAllInvoice,
    getInvoiceDetail,
    addInvoice,
    updateInvoice,
    deleteInvoice
}