const mongoose = require("mongoose");
require("dotenv").config();

mongoose.connect('mongodb://localhost:27017/mydatabase', { useNewUrlParser: true, useUnifiedTopology: true })


const { Schema } = mongoose;
const contactSchema = new Schema({
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  message: { type: String, required: true }
});

<<<<<<< HEAD
// Create a model from the schema
const Contact = mongoose.model('Contact', contactSchema);

module.exports = { Contact };
=======


const Contact = mongoose.model('Contact', contactSchema);


const orderschema = new Schema({
    formdata: {
      country:String,
      firstname: String,
      lastname: String,
      companyName: String,
      address: String,
      state: String,
      Zip: String,
      email: String,
      phoneNo: String,
      Notes: String,
    },
    cartdata: [
      {
        id:Number,
        productImage: String,
        productName: String,
        productPrice: Number,
        pQuantity: Number,
      },
    ]
  })
const Order = mongoose.model('Order' ,orderschema)


module.exports = {Contact,Order}




>>>>>>> af1d60886aab336093ce0f82ab8db15a6bed3247
