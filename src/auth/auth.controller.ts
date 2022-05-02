import {
  Controller,
  Request,
  Post,
  UseGuards,
  Get,
  Body,
} from '@nestjs/common';
import { LocalAuthGuard } from './local-auth.guard';
import { JwtAuthGuard } from './jwt-auth.guard';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @UseGuards(LocalAuthGuard)
  @Post('login')
  async login(@Body() req) {
    console.log(123);
    console.log('auth.controller.ts');
    return this.authService.login(req);
  }

  @Post('token')
  async saveToken(@Body() req) {
    // return this.tokenService
    // console.log(req);
    console.log(req);
    return { status: 'Ok' };
  }
}
