const { Schema, model } = require('mongoose');
const reactionSchema = require('./reaction');

const userSchema = new Schema({
  username: {
    type: String,
    unique: true,
    required: true,
    trim: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    validate: {
      validator: function (input) {
        return /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/i.test(input);
      },
      message: 'Please enter a valid email address',
    },
    thoughts: [
      {
        type: Schema.Types.ObjectId,
        ref: 'Thought',
      },
    ],
    friends: [
      {
        type: Schema.Types.ObjectId,
        ref: 'User',
      },
    ],
  },

  // THROWING AN ERROR!
  // toJSON: {
  //   virtuals: true,
  // },
});

userSchema.virtual('friendCount').get(function () {
  return this.friends && this.friends.length;
});

const User = model('User', userSchema);

module.exports = User;
