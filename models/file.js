const mongoose = require('mongoose');

const FileSchema = mongoose.Schema({ 
     image: { type: String}, 
    date: { type: Date, default: Date.now() },
  });
  
  
  module.exports = mongoose.model("File", FileSchema);
