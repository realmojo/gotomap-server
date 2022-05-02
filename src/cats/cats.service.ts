import { Model } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Cat, CatDocument } from './schema/cat.schema';
import { CreateCatDto } from './dto/create-cat.dto';

@Injectable()
export class CatsService {
  constructor(@InjectModel(Cat.name) private catModel: Model<CatDocument>) {}

  async getAll(): Promise<Cat[]> {
    return await this.catModel.find().exec();
  }

  async getOne(id: number) {
    return await this.catModel.find({ id: id });
  }

  async create(catsData: CreateCatDto) {
    let latestId = await this.catModel.findOne();
    return await this.catModel.create({
      ...catsData,
      id: parseInt(latestId ? latestId.id : 0) + 1,
    });
  }
}
