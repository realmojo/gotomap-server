import { Controller, Body, Post, Delete, Request, Get } from '@nestjs/common';
import { PlaceService } from './place.service';
import { Place } from './schema/place.schema';

@Controller('place')
export class PlaceController {
  constructor(private readonly placeService: PlaceService) {}

  @Post()
  async addPlace(@Body() req): Promise<Place | undefined> {
    return await this.placeService.addPlace(req);
  }

  @Delete()
  async removePlace(@Request() req): Promise<Place | undefined> {
    const { placeId, userId } = req.query;
    return await this.placeService.removePlace(placeId, userId);
  }

  @Get('all')
  async getPlaces(@Request() req): Promise<Place[] | undefined> {
    const { userId } = req.query;
    return await this.placeService.getPlaces(userId);
  }
}
