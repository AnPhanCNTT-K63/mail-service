import { Controller } from '@nestjs/common';
import { EventPattern, Payload } from '@nestjs/microservices';
import { MailService } from './mail.service';

@Controller()
export class MailController {
  constructor(private readonly mailService: MailService) {}

  @EventPattern('send_email')
  async handleSendEmail(@Payload() message: any) {
    console.log('send here');
    await this.mailService.sendEmail(message);
  }
}
