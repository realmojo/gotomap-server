import {
  Controller,
  Get,
  Param,
  Post,
  Delete,
  Patch,
  Body,
  Query,
} from '@nestjs/common';
import { CatsService } from './cats.service';
import { CreateCatDto } from './dto/create-cat.dto';
import { Cat } from './schema/cat.schema';

@Controller('cats')
export class CatsController {
  constructor(private readonly catsService: CatsService) {}

  @Get()
  async getAll(): Promise<Cat[]> {
    return await this.catsService.getAll();
  }

  @Get('/:id')
  async getOne(@Param('id') catId: number): Promise<Cat[]> {
    console.log(catId);
    return await this.catsService.getOne(catId);
  }

  @Post()
  async create(@Body() catsData: CreateCatDto) {
    return await this.catsService.create(catsData);
  }
}
