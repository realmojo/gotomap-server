import { Controller, Get } from '@nestjs/common';
import { DogsService } from './dogs.service';
import { CreateDogDto } from './dto/create-dog.dto';
import { Dog } from './schema/dog.schema';

@Controller('dogs')
export class DogsController {
  constructor(private readonly dogService: DogsService) {}

  @Get()
  async getAll(): Promise<Dog[]> {
    return await this.dogService.getAll();
  }
}
