import { UserService } from './user.service';
import { User } from './schema/user.schema';
export declare class UserController {
    private readonly userService;
    constructor(userService: UserService);
    addUser(req: any): Promise<User>;
}
