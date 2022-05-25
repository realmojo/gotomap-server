/// <reference types="mongoose/types/pipelinestage" />
/// <reference types="mongoose/types/aggregate" />
/// <reference types="mongoose/types/connection" />
/// <reference types="mongoose/types/cursor" />
/// <reference types="mongoose/types/document" />
/// <reference types="mongoose/types/error" />
/// <reference types="mongoose/types/mongooseoptions" />
/// <reference types="mongoose/types/schemaoptions" />
import { Model } from 'mongoose';
import { User, UserDocument } from './schema/user.schema';
import { CreateUserDto } from './dto/create-user.dto';
export declare class UserService {
    private userModel;
    constructor(userModel: Model<UserDocument>);
    findOne(id: string): Promise<User | undefined>;
    addUser(createUserDto: CreateUserDto): Promise<User | undefined>;
    patchUserName(userId: string, name: string): Promise<User & import("mongoose").Document<any, any, any> & {
        _id: any;
    }>;
}
