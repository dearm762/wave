import { ConfigService } from '@nestjs/config'
import { Module } from '@nestjs/common'

import { AuthController } from './auth.controller'

import { PrismaService } from '../prisma/prisma.service'
import { AuthService } from './auth.service'
import { EmailService } from 'src/email/email.service'

@Module({
  controllers: [AuthController],
  providers: [AuthService, PrismaService, EmailService, ConfigService],
})
export class AuthModule { }
