import { Schema, model } from 'mongoose';

import { Models } from '../../@types/models';

export const payments = new Schema<Models.Payment>({
  userId: {
    type: String,
    required: true,
  },
  cardNumber: {
    type: String,
    required: true,
  },
  CVV: {
    type: String,
    required: true,
  },
  phone: {
    type: String,
    required: true,
  },
  invoiceCnpj: {
    type: String,
  },
  invoiceCpf: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

export const PaymentModel = model('Payments', payments);
