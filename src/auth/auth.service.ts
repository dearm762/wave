import { Injectable } from '@nestjs/common'
import { randomBytes } from 'crypto'

import { PrismaService } from 'src/prisma/prisma.service'

import { SignInDto } from './dto/sign-in.dto'
import { SignUpDto } from './dto/sign-up.dto'
import { VerifyAccountDto } from './dto/verify-account.dto'
import { ForgotPasswordDto } from './dto/forgot-password.dto'

@Injectable()
export class AuthService {
	constructor(private readonly prismaService: PrismaService) { }

	async signIn(
		requestBody: SignInDto
	) { }

	async createAccount(
		requestBody: SignUpDto
	) { }

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
