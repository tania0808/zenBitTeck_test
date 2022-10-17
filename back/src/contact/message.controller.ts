import { Body, Controller, HttpStatus, Post, Res } from '@nestjs/common';
import { Message } from './message.entity';
import { MessageService } from './message.service';

@Controller('messages')
export class MessageController {
  constructor(private readonly messsageService: MessageService) {}

  @Post()
  async createMessage(@Res() response, @Body() message: Message) {
    const newMessage = await this.messsageService.createMessage(message);
    return response.status(HttpStatus.CREATED).json({
      newMessage,
    });
  }
}
