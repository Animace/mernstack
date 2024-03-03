const mongoose = require('mongoose');
require('dotenv').config();

// Connect to MongoDB
const connection = mongoose.connect(process.env.MONGODB_URI);

// Handle connection events
connection.then(() => {
  console.log('Connected to MongoDB');
}).catch(error => {
  console.error('Error connecting to MongoDB:', error);
});

const { Schema, model } = mongoose;

const PostSchema = new Schema({
  title: String,
  summary: String,
  content: String,
  cover: String,
  author: { type: Schema.Types.ObjectId, ref: 'User' }
}, {
  timestamps: true
});

const PostModel = model('Post', PostSchema);
module.exports = PostModel;
