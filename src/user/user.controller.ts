import { Controller, Post, Patch, Query, Body } from '@nestjs/common';
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

  @Patch('name')
  async patchUserName(@Body() body, @Query() query): Promise<User> {
    const { userId: id } = query;
    const { name } = body;
    console.log(`userId: ${id} change name: ${name}`);
    return await this.userService.patchUserName(id, name);
  }
}
