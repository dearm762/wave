import { Module } from '@nestjs/common'
import { ConfigModule } from '@nestjs/config'
import { PrismaService } from './prisma/prisma.service';
import { AuthModule } from './auth/auth.module';
import { EmailService } from './email/email.service';

@Module({
  imports: [ConfigModule.forRoot(), AuthModule],
  providers: [PrismaService, EmailService],
})
export class AppModule { }
