import { Schema, model } from 'mongoose';

import { Models } from '../../@types/models';

export const userSchema = new Schema<Models.User>({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  verifyCode: {
    code: String,
    expiresIn: Number,
  },
  function: {
    type: String,
    required: true,
  },
  company: {
    type: String,
  },
  address: {
    type: String,
    required: true,
  },
  city: {
    type: String,
    required: true,
  },
  state: {
    type: String,
    required: true,
  },
  neighborhood: {
    type: String,
    required: true,
  },
  complementary: {
    type: String,
  },
  cpf: {
    type: String,
    required: true,
    unique: true,
  },
  cnpj: {
    type: String,
  },
  phone: {
    type: String,
    required: true,
  },
  serviceId: {
    type: String,
  },
  userLinks: {
    facebook: String,
    instagram: String,
    linkedin: String,
    youtube: String,
    website: String,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

export const UserModel = model('Users', userSchema);
