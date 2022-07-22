const mongoose = require('mongoose');

const cardSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, '- обязательное поле'],
    minlength: [2, 'Минимум 2 символа, пришло значение: {VALUE}'],
    maxlength: [30, 'Максимум 30 символов, пришло значение: {VALUE}'],
  },
  link: {
    type: String,
    required: [true, '- обязательное поле'],
  },
  owner: {
    type: mongoose.Schema.Types.ObjectId,
    required: [true, '- обязательное поле'],
    ref: 'user',
  },
  likes: [
    {
      type: mongoose.Schema.Types.ObjectId,
      default: [],
      ref: 'user',
    },
  ],
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model('card', cardSchema);
