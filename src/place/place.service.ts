import { Model } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Place, PlaceDocument } from './schema/place.schema';
import { CreatePlaceDto } from './dto/create-place.dto';
import { PLACE_STATUS } from './schema/constants';

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
    return await this.placeModel.find({ userId }).sort({ regdate: -1 });
  }

  async getPlaceCount(
    userId: string,
  ): Promise<{ totalCount: number; doneCount: number; backlogCount: number }> {
    const places = await this.placeModel.find({ userId });
    const doneCount = places.filter(
      (place) => place.status === PLACE_STATUS.DONE,
    ).length;

    return {
      totalCount: places.length,
      doneCount,
      backlogCount: places.length - doneCount,
    };
  }

  async updatePlaceStatus(
    filter: { _id: string; userId: string },
    status: PLACE_STATUS,
  ): Promise<Place | undefined> {
    const set = { $set: { status } };
    return await this.placeModel.findOneAndUpdate(filter, set, { new: true });
  }

  async removePlace(_id: string): Promise<Place | undefined> {
    return await this.placeModel.findByIdAndDelete({ _id });
  }
}
