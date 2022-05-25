import {
  Controller,
  Body,
  Post,
  Delete,
  Request,
  Get,
  Patch,
  Query,
  Param,
} from '@nestjs/common';
import { PlaceService } from './place.service';
import { Place } from './schema/place.schema';

@Controller('place')
export class PlaceController {
  constructor(private readonly placeService: PlaceService) {}

  @Get('all/:status')
  async getPlacesByStatus(
    @Request() req,
    @Param() param,
  ): Promise<Place[] | undefined> {
    const { userId } = req.query;
    const { status } = param;
    const cond = {
      userId,
      status,
    };
    console.log(`all/${status}: ${cond}`);
    return await this.placeService.getPlacesByStatus(cond);
  }

  @Get('all')
  async getPlaces(@Request() req): Promise<Place[] | undefined> {
    const { userId } = req.query;
    console.log(`all: ${userId}`);
    return await this.placeService.getPlaces(userId);
  }

  @Get('allCount')
  async getPlaceCount(@Request() req): Promise<{
    totalCount: number;
    doneCount: number;
    backlogCount: number;
  }> {
    const { userId } = req.query;
    console.log(`allCount: ${userId}`);
    const { totalCount, doneCount, backlogCount } =
      await this.placeService.getPlaceCount(userId);
    return {
      totalCount,
      doneCount,
      backlogCount,
    };
  }

  @Get(':_id')
  async getPlace(@Request() req): Promise<Place | undefined> {
    const { _id } = req.params;
    console.log(`getPlace: ${_id}`);
    return await this.placeService.getPlace(_id);
  }

  @Post()
  async addPlace(@Body() req): Promise<Place | undefined> {
    console.log(`addPlace`);
    return await this.placeService.addPlace(req);
  }

  @Delete(':_id')
  async removePlace(@Request() req): Promise<Place | undefined> {
    const { _id } = req.params;
    console.log(`removePlace: ${_id}`);
    return await this.placeService.removePlace(_id);
  }

  @Patch(':_id/status')
  async updatePlaceStatus(@Request() req): Promise<Place | undefined> {
    const { _id } = req.params;
    const { status, userId } = req.query;
    console.log(`id/${status}: ${_id}`);
    const filter = {
      _id,
      userId,
    };
    return await this.placeService.updatePlaceStatus(filter, status);
  }

  @Patch(':_id/memo')
  async updatePlaceMemo(
    @Request() req,
    @Body() body,
    @Query() query,
  ): Promise<Place | undefined> {
    const { _id } = req.params;
    const { memo } = body;
    const { userId } = query;
    const filter = {
      _id,
      userId,
    };
    console.log(`id/memo: ${_id}/${memo}`);
    return await this.placeService.updatePlaceMemo(filter, memo);
  }
}
