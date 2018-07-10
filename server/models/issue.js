import mongoose from 'mongoose';

let Issue = new mongoose.Schema({
  title: String,
  responsible: String,
  description: String,
  severity: String,
  status: {
    type: String,
    default: 'Open'
  }
});

export default mongoose.model('Issue', Issue);
