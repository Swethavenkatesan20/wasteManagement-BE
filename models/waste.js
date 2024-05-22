const mongoose = require('mongoose');

const wasteSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
      },
      category: {
        type: String,
        required: true
      },
      credit: {
        type: Number,
        required: true
      },
      description: {
        type: String,
        required: true
      }
});

module.exports = mongoose.model('Waste', wasteSchema, 'wastes');
