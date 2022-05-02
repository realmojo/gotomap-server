import { Model } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { User, UserDocument } from './schema/user.schema';
import { CreateUserDto } from './dto/create-user.dto';

@Injectable()
export class UserService {
  constructor(@InjectModel(User.name) private userModel: Model<UserDocument>) {}
  // private readonly users = [
  //   {
  //     userId: 1,
  //     username: 'john',
  //     password: 'changeme',
  //   },
  //   {
  //     userId: 2,
  //     username: 'maria',
  //     password: 'guess',
  //   },
  // ];

  // async getAll(): Promise<Cat[]> {
  //   return await this.catModel.find().exec();
  // }
  async findOne(id: string): Promise<User | undefined> {
    return await this.userModel.findOne({ id });
  }

  async addUser(createUserDto: CreateUserDto): Promise<User | undefined> {
    const User = await this.findOne(createUserDto.id);
    if (User) {
      console.log(User);
      return User;
    }
    const createUser = new this.userModel(createUserDto);
    return createUser.save();
  }

  // async findOne(username: string): Promise<User | undefined> {
  //   return this.users.find((user) => user.username === username);
  // }
}
