import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
export type AuthDocument = Auth & Document;

@Schema()
export class Auth {
  @Prop()
  id: string;

  @Prop()
  access_token: string;

  @Prop()
  refresh_token: string;

  @Prop()
  espires_in: number;

  @Prop()
  refresh_refresh_token_expires_intoken: number;
}
export const AuthSchema = SchemaFactory.createForClass(Auth);
