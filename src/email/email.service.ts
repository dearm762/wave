import { Injectable, InternalServerErrorException } from '@nestjs/common'
import { ConfigService } from '@nestjs/config'
import nodemailer, { Transporter } from 'nodemailer'

@Injectable()
export class EmailService {
  private readonly emailUser: string
  private readonly clientUrl: string
  private readonly transporter: Transporter

  constructor(
    private readonly configService: ConfigService
  ) {
    this.emailUser = this.configService.getOrThrow<string>('EMAIL_USER')
    this.clientUrl = this.configService.getOrThrow<string>('FRONTEND_URL')

    this.transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: this.emailUser,
        pass: this.configService.getOrThrow<string>('EMAIL_PASSWORD'),
      },
    })
  }

  async sendVerifyAccountEmail(email: string, token: string) {
    const verifyUrl = `${this.clientUrl}/verify-account?token=${token}`

    return this.sendMail({
      to: email,
      subject: 'Verify your account',
      text: `
        Hello,

        Thank you for registering.

        Please verify your account by clicking the link below:
        ${verifyUrl}

        If you did not create this account, please ignore this email.
      `,
    })
  }

  async sendForgotPasswordEmail(email: string, token: string) {
    const resetUrl = `${this.configService.get('FRONTEND_URL')}/reset-password?token=${token}`

    return this.sendMail({
      to: email,
      subject: 'Reset your password',
      text: `
        Hello,

        You requested to reset your password.

        Click the link below to set a new password:
        ${resetUrl}

        If you did not request this, please ignore this email.
      `,
    })
  }

  private async sendMail({
    to,
    subject,
    text,
  }: {
    to: string
    subject: string
    text: string
  }) {
    try {
      await this.transporter.sendMail({
        from: this.emailUser,
        to,
        subject,
        text,
      })
    } catch (err) {
      console.error('Email error:', err.message)
      throw new InternalServerErrorException(
        'Email service is unavailable. Please try again later.',
      )
    }
  }
}
