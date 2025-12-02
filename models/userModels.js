const mongoose = require('mongoose');
const User = require('./userModels');
const UserSchema = mongoose.Schema(
	{
		fullname: {
			type: String,
			required: [true, 'Full Name is required!'],
			trim: true,
			minLength: [3, 'Full Name must have at least 3 characters!'],
		},
		email: {
			type: String,
			required: [true, 'Email is required!'],
			trim: true,
			unique: [true, 'Email must be unique!'],
			minLength: [5, 'Email must have 5 characters!'],
			lowercase: true,
		},
		password: {
			type: String,
			required: [true, 'Password must be provided!'],
			trim: true,
			select: false,
		},
		phone: {
			type: String, // Waan isticmaalay String si aan u xakameeyo dhererka
			required: [true, 'Phone number is required!'],
			unique: true,
			match: [/^\d+$/, 'Phone number must contain only numbers!'],
			minLength: [7, 'Phone number must be at least 7 digits!'],
			maxLength: [15, 'Phone number cannot be more than 15 digits!'],
		},
		userCode: {
			type: String,
			unique: true,
		},

		role: {
      type: String,
      enum: ['Admin', 'Manager', 'User'], // only these allowed
      default: 'Admin', // default is normal user
      required: true,
    },

	status: {
      type: String,
      enum: ['Active', 'Inactive', 'Banned'], // only these allowed
      default: 'Active', // default is normal user
      required: true,
    },

  
    },
    { timestamps: true }
);
    
module.exports = mongoose.model('User', UserSchema);