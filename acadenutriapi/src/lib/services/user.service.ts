import * as bcrypt from 'bcryptjs';
import * as jwt from 'jsonwebtoken';

import { Models } from '../../@types/models';
import { env } from '../../config/dotenv';
import { toObjectId } from '../../utils/mongo/convertObj';
import { hoursToMs } from '../../utils/time';
import { UserModel } from '../models/user.model';
import { UserServiceModel } from '../models/userService.model';

export class UserService {
  async signIn(email: string, password: string, expiresIn: number) {
    if (!(email || password)) throw new Error('invalid credentials');
    const user = await UserModel.findOne({ email });
    if (!user) throw new Error('invalid credentials');
    const isValidPassord = bcrypt.compareSync(password, user.password);
    if (!isValidPassord) throw new Error('invalid password');
    return jwt.sign({ id: user.id }, env.TOKEN_KEY, { expiresIn });
  }

  async signUp(user: Models.User) {
    if (!(user.email || user.password)) throw new Error('invalid credentials');
    const userExists = await UserModel.findOne({ email: user.email });
    if (userExists) throw new Error('user already exists');
    const hashedPassword = bcrypt.hashSync(user.password, 10);
    const newUser = new UserModel({ ...user, password: hashedPassword });
    return await newUser.save();
  }

  async decodeToken(token: string) {
    const decodedToken = jwt.verify(token, env.TOKEN_KEY) as any;
    if (!decodedToken?.id) throw new Error('Invalid token id');
    return decodedToken;
  }

  async refreshToken(token: string) {
    const decodedToekn = jwt.verify(token, env.TOKEN_KEY) as any;
    const { id, exp } = decodedToekn;
    if (!id) throw new Error('Invalid token');
    const newToken = jwt.sign({ id }, env.TOKEN_KEY, { expiresIn: exp });
    return { userId: id, token: newToken };
  }

  async requestCode(email: string) {
    const user = await UserModel.findOne({ email });
    if (!user) throw new Error('user not found');
    const code = Math.random().toString().substring(2, 6);
    user.verifyCode = { code, expiresIn: Date.now() + 60 * 1000 };
    await user.save();
    return code;
  }

  async verifyCode(email: string, userCode: string) {
    const user = await UserModel.findOne({ email });
    if (!user) throw new Error('user not found');
    const { code, expiresIn } = user.verifyCode;
    if (code !== userCode) throw new Error('Invalid verification code');
    if (Number(expiresIn) < Date.now()) throw new Error('Code was expired');
    const newToken = jwt.sign({ id: user.id }, env.TOKEN_KEY, { expiresIn: hoursToMs(12) });
    return { email: user.email, token: newToken };
  }

  async getUser(userId: string) {
    const user = await UserModel.findOne({ _id: userId });
    if (!user) throw new Error('user not found');
    return user;
  }

  async getUserService(serviceId: string) {
    const service = await UserServiceModel.findOne({ _id: serviceId });
    if (!service) throw new Error('service not found');
    return service;
  }

  async addUserService(userId: string, service: Models.UserService) {
    const user = await UserModel.findOne({ _id: userId });
    if (!user) throw new Error('user not found');
    const newService = new UserServiceModel(service);
    if (user.serviceId) {
      newService.isNew = false;
      newService._id = toObjectId(user.serviceId);
    }
    await newService.save();
    user.serviceId = newService.id;
    return await user.save();
  }

  async addUserLinks(userId: Models.User, links: Models.UserLinks) {
    const user = await UserModel.findOne({ _id: userId });
    if (!user) throw new Error('user not found');
    user.userLinks = {
      ...user.userLinks,
      ...links,
    };
    return await user.save();
  }
}
