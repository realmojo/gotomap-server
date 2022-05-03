import { Model } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Place, PlaceDocument } from './schema/place.schema';
import { CreatePlaceDto } from './dto/create-place.dto';

@Injectable()
export class PlaceService {
  constructor(
    @InjectModel(Place.name) private placeModel: Model<PlaceDocument>,
  ) {}

  async findOne(placeId: string, userId: string): Promise<Place | undefined> {
    return await this.placeModel.findOne({ placeId, userId });
  }

  async addPlace(createPlaceDto: CreatePlaceDto): Promise<Place | undefined> {
    const Place = await this.findOne(
      createPlaceDto.placeId,
      createPlaceDto.userId,
    );
    if (Place) {
      return Place;
    }
    const createPlace = new this.placeModel(createPlaceDto);
    return createPlace.save();
  }

  async getPlaces(userId: string): Promise<Place[] | undefined> {
    return await this.placeModel.find({ userId });
  }

  async removePlace(
    placeId: string,
    userId: string,
  ): Promise<Place | undefined> {
    return await this.placeModel.findOneAndRemove({ placeId, userId });
  }
}
