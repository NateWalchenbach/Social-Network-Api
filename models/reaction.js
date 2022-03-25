const mongoose = require('mongoose');
const User = require('./User');

const reactionSchema = new mongoose.Schema(
  {
    reactionId: {
      type: Schema.Types.ObjectId,
      default: () => new Types.ObjectId(),
      immutable: true,
    },
    reactionBody: {
      type: String,
      required: [true, 'A reaction must have a body'],
      maxlength: [
        280,
        'Please keep your reaction shorter than 280 characters...',
      ],
    },
    username: {
      type: String,
      required: true,
      validate: {
        validator: function (username) {
          return User.exists({ username });
        },
        message: 'User does not exist',
      },
    },
    createdAt: {
      type: Date,
      default: Date.now,
      get: (date) => date.toLocaleString(),
    },
  },
  {
    toJSON: {
      getters: true,
    },
    _id: false,
    id: false,
  }
);

module.exports = reactionSchema;
