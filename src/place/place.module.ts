import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { Place, PlaceSchema } from './schema/place.schema';
import { PlaceController } from './place.controller';
import { PlaceService } from './place.service';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Place.name, schema: PlaceSchema }]),
  ],
  controllers: [PlaceController],
  providers: [PlaceService],
  exports: [PlaceService],
})
export class PlaceModule {}
