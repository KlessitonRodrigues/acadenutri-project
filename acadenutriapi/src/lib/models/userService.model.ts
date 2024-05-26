import { Schema, model } from 'mongoose';

import { Models } from '../../@types/models';

export const userService = new Schema<Models.UserService>({
  openDays: {
    type: [Number],
    required: true,
  },
  openHour: {
    type: String,
    required: true,
  },
  closeHour: {
    type: String,
    required: true,
  },
  elegibleDays: {
    type: [Number],
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

export const UserServiceModel = model('UserServices', userService);
