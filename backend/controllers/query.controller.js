const Query = require("../models/query.model");
const mongoose = require("mongoose")
exports.postQuery = async (req, res) => {
  try {
    // Read the query request body
    const { title, description } = req.body;
    if (!title || !description) {
      return res.status(400).json({ message: 'Title and description are required' });
    }
    const image = req.file ? req.file.filename : null;
    const postedBy = req.user._id;

    // Create query object
    const newQuerry = new Query({
      title,
      description,
      postedBy,
      image,
    });

    // Insert into database
    await newQuerry.save();
    res.status(201).json({ message: "Query posted successfully", data: newQuerry });
  } catch (err) {
    res.status(500).json({ message: 'Server error', error: err.message });
  }
};

// Get all Queries
exports.getAllQueries = async (req, res) => {
  try {
    const queries = await Query.find().populate('postedBy', 'name email');
    res.status(200).json({ message: 'Queries fetched successfully', data: queries });
  } catch (err) {
    console.error("this is error from backend controller",err);
    res.status(500).json({ message: 'Server error', error: err.message });
  }
};

// Get a query by ID
exports.getQueryById = async (req, res) => {
  try {
    const query = await Query.findById(req.params.queryId).populate('postedBy', 'username');
    if (!query) {
      return res.status(404).json({ message: 'Query not found' });
    }
    res.status(200).json({ message: 'Query fetched successfully', data: query });
  } catch (error) {
    res.status(500).json({ message: 'Server error', error: error.message });
  }
};