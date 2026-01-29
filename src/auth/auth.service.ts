import { Injectable } from '@nestjs/common'
import { randomBytes } from 'crypto'

import { PrismaService } from 'src/prisma/prisma.service'
import { EmailService } from 'src/email/email.service'

import { SignInDto } from './dto/sign-in.dto'
import { SignUpDto } from './dto/sign-up.dto'
import { VerifyAccountDto } from './dto/verify-account.dto'
import { ForgotPasswordDto } from './dto/forgot-password.dto'

@Injectable()
export class AuthService {
	constructor(
		private readonly prismaService: PrismaService,
		private readonly emailService: EmailService,
	) { }

	async signIn(
		requestBody: SignInDto
	) { }

	async createAccount(dto: SignUpDto) {
		const token = this.generateRandomString()

		const user = await this.prismaService.user.create({
			data: {
				email: dto.email,
				verificationToken: token
			},
		})

		await this.emailService.sendVerifyAccountEmail(user.email, token)

		return { message: 'Verification email sent' }
	}

	async verifyAccount(
		requestBody: VerifyAccountDto
	) { }

	async forgotPassword(
		requestBody: ForgotPasswordDto
	) { }

	private generateRandomString(length = 32) {
		return randomBytes(length).toString('hex')
	}

	private async sendEmail(
		email: string,
		message: string
	) { }
}
