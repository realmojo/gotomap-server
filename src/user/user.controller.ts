import { Controller, Post, UseGuards, Body } from '@nestjs/common';
import { UserService } from './user.service';
import { User } from './schema/user.schema';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post()
  async addUser(@Body() req): Promise<User> {
    return await this.userService.addUser(req);
  }
}

// import { Controller, Get } from '@nestjs/common';
// import { DogsService } from './dogs.service';
// import { CreateDogDto } from './dto/create-dog.dto';
// import { Dog } from './schema/dog.schema';

// @Controller('dogs')
// export class DogsController {
//   constructor(private readonly dogService: DogsService) {}

//   @Get()
//   async getAll(): Promise<Dog[]> {
//     return await this.dogService.getAll();
//   }
// }
