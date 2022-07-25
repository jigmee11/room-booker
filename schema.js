const mongoose = require("mongoose");
const Message = new mongoose.Schema({
  message: {
    type: String,
    required: [true, "Empty"],
    // unique: true,
    trim: true,
  },
  sentBy: {
    type: String,
    required: [true, "Empty"],
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  // senderId: {
  //       type: String,
  //       required: [true, "Empty"],
  // }
});

exports.Event = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  // eventDate:{
  //     type: Date,
  //     required:[true,"Empty"],
  // },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

const SendMessage = async (data, id) => {
  const db = mongoose.model(id, Message);
  return await db.create(data);
};
// module.exports = SendMessage;
