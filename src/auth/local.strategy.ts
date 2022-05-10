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
    const user = await this.authService.validateUser(id, name);
    if (!user) {
      throw new UnauthorizedException();
    }
    return user;
  }
}
