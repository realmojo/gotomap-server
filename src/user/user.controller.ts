import { Controller, Post, Query, Body } from '@nestjs/common';
import { UserService } from './user.service';
import { User } from './schema/user.schema';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post()
  async addUser(@Body() req): Promise<User> {
    console.log(`adduser`);
    return await this.userService.addUser(req);
  }

  @Post('name')
  async patchUserName(@Body() body, @Query() query): Promise<User> {
    const { userId } = query;
    const { name } = body;
    console.log(`userId: ${userId} change name: ${name}`);
    return await this.userService.patchUserName(userId, name);
  }
}
