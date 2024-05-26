import { Lambdas } from '../../../../@types/lambdas';
import { dbConnect, dbDisconnect } from '../../../../config/mongoDB';
import { createResponse } from '../../../../utils/api/createResponse';
import { toJSObject } from '../../../../utils/mongo/convertObj';
import { UserService } from '../../../services/user.service';

export const handler: Lambdas.APIHandler = async event => {
  try {
    const token = event.headers['Authorization'];
    if (!token) throw new Error('missing token');

    await dbConnect();
    const userService = new UserService();
    const newToken = await userService.refreshToken(token);
    const user = await userService.getUser(newToken.userId);
    const service = user.serviceId && (await userService.getUserService(user.serviceId));
    const userData = {
      user: toJSObject(user),
      service: toJSObject(service),
      token: newToken.token,
    };

    return createResponse(200, userData);
  } catch (err: any) {
    console.log(err.message);
    return createResponse(500, err.message);
  } finally {
    await dbDisconnect();
  }
};
