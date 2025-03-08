const mongoose = require("mongoose")

const SolutionSchema = new mongoose.Schema({
    queryId: { type: mongoose.Schema.Types.ObjectId, ref: 'Query'}, // Linked to a query
    solutionText: { type: String },
    solutionImage: { type: String }, 
    solutionVideo: { type: String }, 
    postedBy: { type: mongoose.Schema.Types.ObjectId, ref: 'User' }, 
    createdAt: { type: Date, default: Date.now }
  });
  
  module.exports = mongoose.model('Solution', SolutionSchema);
  