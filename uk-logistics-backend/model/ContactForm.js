const mongoose = require('mongoose');

const contactFormSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    phoneNo: {
        type: String,
        required: true
    },
    address: {
        type: String,
        required: true
    },
    query: {
        type: String,
        required: true
    }
}, { timestamps: true });

module.exports = mongoose.model('ContactForm', contactFormSchema);
