const mongoose = require('mongoose');

const TodoSchema = mongoose.Schema({ 
     title: { type: String}, 
     task: { type: String}, 
    date: { type: Date, default: Date.now() },
  });
  
  
  module.exports = mongoose.model("Todo", TodoSchema);
