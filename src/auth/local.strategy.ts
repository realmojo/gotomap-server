import { Strategy } from 'passport-local';
import { PassportStrategy } from '@nestjs/passport';
import { Injectable, UnauthorizedException } from '@nestjs/common';
import { AuthService } from './auth.service';

@Injectable()
export class LocalStrategy extends PassportStrategy(Strategy) {
  constructor(private authService: AuthService) {
    super({
      usernameField: 'id',
      passwordField: 'name',
    });
    // super({});
  }

  async validate(id: string, name: string): Promise<any> {
    console.log(11, id, name);
    const user = await this.authService.validateUser(id, name);
    console.log(user, 123);
    if (!user) {
      throw new UnauthorizedException();
    }
    return user;
  }
}
