import {
  Controller,
  Body,
  Post,
  Delete,
  Request,
  Get,
  Patch,
} from '@nestjs/common';
import { PlaceService } from './place.service';
import { Place } from './schema/place.schema';

@Controller('place')
export class PlaceController {
  constructor(private readonly placeService: PlaceService) {}

  @Post()
  async addPlace(@Body() req): Promise<Place | undefined> {
    return await this.placeService.addPlace(req);
  }

  @Delete(':_id')
  async removePlace(@Request() req): Promise<Place | undefined> {
    const { _id } = req.params;
    console.log(_id);
    return await this.placeService.removePlace(_id);
  }

  @Get('all')
  async getPlaces(@Request() req): Promise<Place[] | undefined> {
    const { userId } = req.query;
    console.log(userId);
    return await this.placeService.getPlaces(userId);
  }

  @Get('allCount')
  async getPlaceCount(@Request() req): Promise<{
    totalCount: number;
    doneCount: number;
    backlogCount: number;
  }> {
    const { userId } = req.query;
    const { totalCount, doneCount, backlogCount } =
      await this.placeService.getPlaceCount(userId);
    return {
      totalCount,
      doneCount,
      backlogCount,
    };
  }

  @Patch(':_id/status')
  async updatePlaceStatus(@Request() req): Promise<Place | undefined> {
    const { _id } = req.params;
    const { status, userId } = req.query;
    const filter = {
      _id,
      userId,
    };
    return await this.placeService.updatePlaceStatus(filter, status);
  }
}
