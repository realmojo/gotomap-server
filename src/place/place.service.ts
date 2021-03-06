import { Model } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Place, PlaceDocument } from './schema/place.schema';
import { CreatePlaceDto } from './dto/create-place.dto';
import { PLACE_STATUS } from './schema/constants';
import * as moment from 'moment';

@Injectable()
export class PlaceService {
  constructor(
    @InjectModel(Place.name) private placeModel: Model<PlaceDocument>,
  ) {}

  async getPlace(_id: string): Promise<Place | undefined> {
    return await this.placeModel.findById({ _id });
  }

  async getPlaces(userId: string): Promise<Place[] | undefined> {
    return await this.placeModel.find({ userId }).sort({ updated: -1 });
  }

  async getPlacesByStatus(cond: {
    userId: string;
    status: string;
  }): Promise<Place[] | undefined> {
    const sort =
      cond.status === PLACE_STATUS.DONE ? { updated: -1 } : { created: -1 };
    return await this.placeModel.find(cond).sort(sort);
  }

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
    const set = {
      $set: { status, updated: moment().format('YYYY-MM-DD HH:mm:ss') },
    };
    return await this.placeModel.findOneAndUpdate(filter, set, { new: true });
  }

  async updatePlaceMemo(
    filter: { _id: string; userId: string },
    memo: string,
  ): Promise<Place | undefined> {
    const set = { $set: { memo } };
    return await this.placeModel.findOneAndUpdate(filter, set, { new: true });
  }

  async removePlace(_id: string): Promise<Place | undefined> {
    return await this.placeModel.findByIdAndDelete({ _id });
  }
}
