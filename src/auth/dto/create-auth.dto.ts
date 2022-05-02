import { IsString, IsNumber } from 'class-validator';

export class CreateAuthDto {
  @IsString()
  readonly id: string;

  @IsString()
  readonly access_token: string;

  @IsString()
  readonly refresh_token: string;

  @IsNumber()
  readonly espires_in: number;

  @IsNumber()
  readonly refresh_token_expires_in: number;
}
