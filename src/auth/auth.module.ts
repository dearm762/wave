import { Module } from '@nestjs/common'

import { AuthController } from './auth.controller'

import { AuthService } from './auth.service'
import { PrismaService } from '../prisma/prisma.service'
import { EmailService } from 'src/email/email.service'
import { ConfigService } from '@nestjs/config'

@Module({
  controllers: [AuthController],
  providers: [AuthService, PrismaService, EmailService, ConfigService],
})
export class AuthModule { }
