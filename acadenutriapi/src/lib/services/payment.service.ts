import { Models } from '../../@types/models';
import { PaymentModel } from '../models/payment.model';

export class PaymentService {
  async savePayment(userId: string, payment: Models.Payment) {
    const newPayment = new PaymentModel({ ...payment, userId });
    return await newPayment.save();
  }
}
