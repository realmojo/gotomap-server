import { Controller, Post, UseGuards, Body } from '@nestjs/common';
import { LocalAuthGuard } from './local-auth.guard';
import { JwtAuthGuard } from './jwt-auth.guard';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @UseGuards(LocalAuthGuard)
  @Post('login')
  async login(@Body() req) {
    return this.authService.login(req);
  }

  @UseGuards(JwtAuthGuard)
  @Post('token')
  async saveToken(@Body() req) {
    return { status: 'Ok' };
  }
}
