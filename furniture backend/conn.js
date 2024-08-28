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

// Create a model from the schema
const Contact = mongoose.model('Contact', contactSchema);

module.exports = { Contact };
