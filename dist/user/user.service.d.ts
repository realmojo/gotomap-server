import { Model } from 'mongoose';
import { User, UserDocument } from './schema/user.schema';
import { CreateUserDto } from './dto/create-user.dto';
export declare class UserService {
    private userModel;
    constructor(userModel: Model<UserDocument>);
    findOne(id: string): Promise<User | undefined>;
    addUser(createUserDto: CreateUserDto): Promise<User | undefined>;
}
