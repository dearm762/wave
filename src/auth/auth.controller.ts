import { Body, Controller, Post } from '@nestjs/common'

import { AuthService } from './auth.service'

import { SignInDto } from './dto/sign-in.dto'
import { SignUpDto } from './dto/sign-up.dto'
import { VerifyAccountDto } from './dto/verify-account.dto'
import { ForgotPasswordDto } from './dto/forgot-password.dto'

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) { }

  @Post('sign-in')
  async signIn(@Body() requestBody: SignInDto) {
    return await this.authService.signIn(requestBody)
  }

  @Post('sign-up')
  async signUp(@Body() requestBody: SignUpDto) {
    return await this.authService.createAccount(requestBody)
  }

  @Post('verify-account')
  async verifyAccount(@Body() requestBody: VerifyAccountDto) {
    return await this.authService.verifyAccount(requestBody)
  }

  @Post('forgot-password')
  async forgotPassword(@Body() requestBody: ForgotPasswordDto) {
    return await this.authService.forgotPassword(requestBody)
  }
}
