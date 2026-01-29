import { BadRequestException, Injectable } from '@nestjs/common'
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
		const verificationToken = this.generateRandomString()

		const user = await this.prismaService.user.create({
			data: {
				email: dto.email,
				verificationToken
			},
		})

		await this.emailService.sendVerifyAccountEmail(user.email, verificationToken)

		return { message: 'Verification email sent' }
	}

	async verifyAccount(
		requestBody: VerifyAccountDto
	) { }

	async forgotPassword(dto: ForgotPasswordDto) {
		const user = await this.prismaService.user.findUnique({
			where: { email: dto.email },
		})
		if (!user) throw new BadRequestException('User not found')

		const verificationToken = this.generateRandomString()

		await this.prismaService.user.update({
			where: { email: dto.email },
			data: {
				verificationToken,
			},
		})

		await this.emailService.sendForgotPasswordEmail(dto.email, verificationToken)

		return { message: 'Password reset email sent' }
	}

	private generateRandomString(length = 32) {
		return randomBytes(length).toString('hex')
	}
}
