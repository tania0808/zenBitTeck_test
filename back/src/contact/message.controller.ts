import { MessageService } from './message.service';
import { Body, Controller, Get, Post } from '@nestjs/common';

@Controller('messages')
export class MessageController {
  constructor(private readonly messsageservice: MessageService) {}

  @Get()
  welcome() {
    return 'Hello';
  }

  @Post()
  reachOut(
    @Body('name') name: string,
    @Body('email') email: string,
    @Body('message') message: string,
  ) {
    const messageId = this.messsageservice.sendMessage(name, email, message);
    return {
      id: messageId,
    };
  }
}
