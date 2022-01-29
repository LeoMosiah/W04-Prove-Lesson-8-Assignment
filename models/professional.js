const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const Link  = new Schema(
  {
    link: String,
    text: String,
  },
  { _id: false },
);

const professionalSchema = new Schema(
  {
    professionalName: {
      type: String,
      required: true
    },
    nameLink: {
      firstName: { type: String },
      url: { type: String },
    },
    linkedInLink: Link,
    githubLink: Link,
    base64Image: {
      type: String,
      required: true
    },
    primaryDescription: {
      type: String,
      required: true
    },
    workDescription1: {
      type: String,
      required: true
    },
    workDescription2: {
      type: String,
      required: true
    },
    linkTitleText: {
      type: String,
      required: true
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model('Professional', professionalSchema);
