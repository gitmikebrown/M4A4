const mongoose = require('mongoose');

const ledgerSchema = new mongoose.Schema({
  //ID: INT, //IDENTITY (30001, 1) Mongoose has an _Id already.
  ID_LOAN: { 
    type: String, 
    require: [true,'You must enter a loan ID'],
    unique: true
  },
  PAYMENT_AMOUNT: Number,
  INTEREST: Number,
  PRINCIPAL: Number,
  IS_DELETED: { type: Boolean, default: false }
},  
{
    timestamps: { createdAt: 'CREATED_DATE', updatedAt: 'MODIFIED_DATE' }
});

const Ledger = mongoose.model('Ledger', ledgerSchema);
module.exports = Ledger;