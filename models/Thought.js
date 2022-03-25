const { Schema, model } = require('mongoose');
const User = require('./User');
const reactionSchema = require('./reaction');

const thoughtSchema = new Schema(
  {
    thoughtText: {
      type: String,
      required: [true, 'A thought must have text'],
      minlength: [1, 'Please enter your thought'],
      maxlength: [280, 'Please have thoughts less than 280 characters...'],
    },
    createdAt: {
      type: Date,
      default: Date.now,
      get: (date) => date.toLocaleString(),
    },
    username: {
      type: Schema.Types.String,
      ref: 'User',
      required: [true, 'A thought must be linked to a username...'],
      validate: {
        validator: function (username) {
          return User.exists({ username });
        },
        message: 'User does not exist',
      },
    },
    reactions: [reactionSchema],
  },
  {
    toJSON: {
      virtuals: true,
      getters: true,
    },
  }
);

thoughtSchema.post('save', function (thought, next) {
  User.findOneAndUpdate(
    { username: thought.username },
    { $addToSet: { thoughts: thought } },
    { select: '-username' },
    next()
  );
});

// Friends virtual
thoughtSchema.virtual('reactionCount').get(function () {
  return this.reactions && this.reactions.length;
});

const Thought = model('Thought', thoughtSchema);

module.exports = Thought;
