const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, '- обязательное поле'],
    minlength: [2, 'Минимум 2 символа, пришло значение: {VALUE}'],
    maxlength: [30, 'Максимум 30 символов, пришло значение: {VALUE}'],
  },
  about: {
    type: String,
    required: [true, '- обязательное поле'],
    minlength: [2, 'Минимум 2 символа, пришло значение: {VALUE}'],
    maxlength: [30, 'Максимум 30 символов, пришло значение: {VALUE}'],
  },
  avatar: {
    type: String,
    required: [true, '- обязательное поле'],
  },
});

module.exports = mongoose.model('user', userSchema);
