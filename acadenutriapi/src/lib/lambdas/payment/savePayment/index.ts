import { Lambdas } from '../../../../@types/lambdas';
import { dbConnect, dbDisconnect } from '../../../../config/mongoDB';
import { createResponse } from '../../../../utils/api/createResponse';
import { toJSObject } from '../../../../utils/mongo/convertObj';
import { PaymentService } from '../../../services/payment.service';
import { UserService } from '../../../services/user.service';

export const handler: Lambdas.APIHandler = async event => {
  try {
    const token = event.headers['Authorization'];
    const { payment } = JSON.parse(event.body || '');

    await dbConnect();
    const userService = new UserService();
    const paymentService = new PaymentService();
    const { id } = await userService.decodeToken(token);
    const newPayment = await paymentService.savePayment(id, payment);

    return createResponse(200, toJSObject(newPayment));
  } catch (err: any) {
    return createResponse(500, err.message);
  } finally {
    await dbDisconnect();
  }
};
