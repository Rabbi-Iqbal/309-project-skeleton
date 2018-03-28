var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var ProductSchema = {

  name: {
    type: String,
    default: '',
    trim: true,
    required: 'Name required'
  },
  
  price: {
    type: Number,
    trim: true,
    required: 'Price required'
  },
  
   quantity: {
    type: Number,
    trim: true,
    min: '1',
    required: 'Quantity required'
  },
  
  descr: {
    type: String,
    trim: true,
    required: 'Description required'
  },
  
  
  user: {
    type: Schema.ObjectId,
    ref: 'User'
  },

  created: {
    type: Date,
    default: Date.now
  }
}

var Product = mongoose.model('Product', ProductSchema, 'products');
module.exports = Product;
