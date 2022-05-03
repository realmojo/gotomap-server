import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { CatsModule } from './cats/cats.module';
import { DogsModule } from './dogs/dogs.module';
import { UserModule } from './user/user.module';
import { AuthModule } from './auth/auth.module';
import { PlaceModule } from './place/place.module';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://localhost/gotomap'),
    CatsModule,
    DogsModule,
    UserModule,
    AuthModule,
    PlaceModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
