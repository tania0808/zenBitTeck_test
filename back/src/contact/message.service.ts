import { Injectable } from '@nestjs/common';
import { Message } from './message.model';
import { v4 as uuidv4 } from 'uuid';

@Injectable()
export class MessageService {
  private messages: Message[] = [];

  sendMessage(name: string, email: string, message: string) {
    const id = uuidv4();
    const newMessage = new Message(id, name, email, message);

    this.messages.push(newMessage);

    return id;
  }
}
