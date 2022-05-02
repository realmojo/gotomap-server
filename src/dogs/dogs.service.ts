import { Model } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Dog, DogDocument } from './schema/dog.schema';
import { CreateDogDto } from './dto/create-dog.dto';

@Injectable()
export class DogsService {
  constructor(@InjectModel(Dog.name) private dogModel: Model<DogDocument>) {}

  async getAll(): Promise<Dog[]> {
    return await this.dogModel.find().exec();
  }
}
