import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { UserModule } from './user/user.module';
import { AuthModule } from './auth/auth.module';
import { PlaceModule } from './place/place.module';
import { MapController } from './map/map.controller';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://localhost/gotomap'),
    UserModule,
    AuthModule,
    PlaceModule,
  ],
  controllers: [AppController, MapController],
  providers: [AppService],
})
export class AppModule {}
