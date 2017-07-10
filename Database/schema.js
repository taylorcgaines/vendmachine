const mongoose = require('mongoose');

const itemSchema = new mongoose.Schema({
  // id: {
  //   type: Objectid,
  //   required: true
  // },
  // description: {
  //   type: String,
  //   required: true
  // },
  cost: {
    type: Number,
    required: true
  },
  // quantity: {
  //   type: Number,
  //   required: true
  // },
  // updatedAt: {
  //   type: Date,
  //   required: true,
  //   default: Date.now
  // }
})

const Item = mongoose.model('Item', itemSchema);

module.exports = {
  Item: mongoose.model('Item', itemSchema)
}
