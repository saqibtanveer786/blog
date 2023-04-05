const mongoose = require('mongoose');
const { Schema, model } = mongoose;

const blogpostsSchema = new Schema(
  {
    title: {
      type: String,
      require: false,
    },
    description: {
      type: String,
      require: false,
    },
    image: {
      type: String,
      require: false,
    },
    author: {
      type: String,
      require: false,
    },
    category: {
      type: Array,
      require: false,
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
