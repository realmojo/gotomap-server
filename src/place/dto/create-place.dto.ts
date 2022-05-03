import { IsString, IsNumber } from 'class-validator';
import { PLACE_STATUS } from '../schema/constants';

export class CreatePlaceDto {
  @IsString()
  readonly placeId: string;
  @IsString()
  readonly userId: string;

  @IsNumber()
  readonly latitude: number;
  @IsNumber()
  readonly longitude: number;

  @IsString()
  readonly title: string;
  @IsString()
  readonly description: string;
  @IsString()
  readonly phone: string;
  @IsString()
  readonly fullAddress: string;
  @IsString()
  readonly fullRoadAddress: string;

  @IsString()
  readonly status: PLACE_STATUS;

  @IsNumber()
  readonly sido: string;
  @IsNumber()
  readonly sigungu: string;

  @IsNumber()
  readonly regdate: string;
}

// @Prop()
// status: Status;

// @Prop()
// regdate: string;
