import { IsString, IsNumber } from 'class-validator';

export class CreateDogDto {
  @IsString()
  readonly name: string;

  @IsNumber()
  readonly age: string;

  @IsString({ each: true })
  readonly breed: string;
}
