import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { PLACE_STATUS } from './constants';

export type PlaceDocument = Place & Document;

@Schema()
export class Place {
  @Prop()
  placeId: string;

  @Prop()
  userId: string;

  @Prop()
  latitude: number;

  @Prop()
  longitude: number;

  @Prop()
  title: string;

  @Prop()
  description: string;

  @Prop()
  phone: string;

  @Prop()
  fullAddress: string;

  @Prop()
  fullRoadAddress: string;

  // @Prop()
  // info: object;

  @Prop()
  status: PLACE_STATUS;

  @Prop()
  sido: string;

  @Prop()
  sigungu: string;

  @Prop()
  regdate: string;
}

export const PlaceSchema = SchemaFactory.createForClass(Place);
