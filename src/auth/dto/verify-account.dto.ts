import { IsString, MaxLength, MinLength } from 'class-validator'

export class VerifyAccountDto {
	@IsString()
	verifyToken: string

	@IsString()
	@MinLength(8)
	@MaxLength(20)
	newPassword: string
}