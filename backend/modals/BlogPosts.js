const mongoose = require('mongoose');
const { Schema, model } = mongoose;

const blogpostsSchema = new Schema(
  {
    title: {
      type: String,
      require: true,
    },
    description: {
      type: String,
      require: true,
    },
    image: {
      type: String,
      require: true,
    },
    author: {
      type: String,
      require: true,
    },
    category: {
      type: Array,
      require: true,
      default: 'General',
    },
    isLatest: {
      type: Boolean,
      required: false,
    },
  },
  {
    timestamps: true,
  }
);

const blogpostsModel = model('blogposts', blogpostsSchema);

module.exports = blogpostsModel;
