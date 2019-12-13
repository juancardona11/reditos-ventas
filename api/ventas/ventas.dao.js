const mongoose = require('mongoose');
const ventasSchema = require('./ventas.model');

ventasSchema.statics = {
  create: function (data, cb) {
    const user = new this(data);
    user.save(cb);
  },
  login: function (query, cb) {
    this.find(query, cb);
  }
  
}

const ventasModel = mongoose.model('Ventas', ventasSchema);
module.exports = ventasModel;