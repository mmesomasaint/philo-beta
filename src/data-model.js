const mongoose = require('mongoose')
const validator = require('validator')

const dataSchema = new mongoose.Schema(
  {
    firstName: {
      type: String,
      required: [true, 'Enter your firstname.'],
      validate: {
        validator: function (fname) {
          return validator.isAlphanumeric(fname, 'en-US', { ignore: 's' })
        },
        message: 'firstname may only have letters and numbers',
      },
    },
    lastName: {
      type: String,
      required: [true, 'Enter your lastname.'],
      validate: {
        validator: function (lname) {
          return validator.isAlphanumeric(lname, 'en-US', { ignore: 's' })
        },
        message: 'lastname may only have letters and numbers',
      },
    },
    email: {
      type: String,
      required: [true, 'Enter an email address.'],
      unique: [true, 'Email already taken.'],
      validate: [validator.isEmail, 'Enter a valid email address.'],
    },
  },
  { timestamps: true }
)

const Data = mongoose.model('Data', dataSchema)
module.exports = Data
