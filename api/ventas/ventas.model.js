const mongoose = require('mongoose');
const Schema = mongoose.Schema;
var ObjectId = mongoose.Schema.Types.ObjectId;
mongoose.set('useCreateIndex', true);
const ventasSchema = new Schema({
  type: {
    type: String,
    required: true,
    trim: true
  },
  text: {
    type: String,
    required: true,
    trim: true,
  }, 
}, {
    timestamps: true
  });

module.exports = ventasSchema;