const mongoose = require('mongoose');

const customerSchema = new mongoose.Schema({
    //ID: INT, //IDENTITY(10001, 1) Mongoose has an _Id already.
    //NAME: String, //First Middle and last are defined below.
    FIRST_NAME: String,
    MIDDLE_NAME: String,
    LAST_NAME: String,
    DATE_OF_BIRTH: Date,
    GENDER: String,
    IS_DELETED: { type: Boolean, default: false }
},  
{
    timestamps: { createdAt: 'CREATED_DATE', updatedAt: 'MODIFIED_DATE' }
});

const Customer = mongoose.model('Customer', customerSchema);
module.exports = Customer;