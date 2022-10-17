import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MessageModule } from './contact/message.module';

@Module({
  imports: [MessageModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
