const mongoose = require('mongoose');

const loanSchema = new mongoose.Schema({
  //ID: {type: Int, Identity (20001, 1)}, Mongoose has an _Id already.
  ID_CUSTOMER: { 
    type: String, 
    require: [true,'You must enter a Customer ID'],
    unique: true
  },
  LOAN_TYPE: String,
  LOAN_NUMBER: Number,
  AMOUNT: Number,
  INTEREST_RATE: Number,
  LOAN_TERMS: String,
  START_DATE: Date,
  IS_DELETED: { type: Boolean, default: false }
},  
{
    timestamps: { createdAt: 'CREATED_DATE', updatedAt: 'MODIFIED_DATE' }
});


const Loan = mongoose.model('Loan', loanSchema);
module.exports = Loan;