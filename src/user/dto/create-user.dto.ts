import { IsNumber, IsString } from 'class-validator';

export class CreateUserDto {
  @IsString()
  readonly id: string;

  @IsString()
  readonly name: string;

  @IsString()
  readonly profileImage: string;

  @IsString()
  readonly created: string;
}
