import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { Message } from './contact/message.entity';
import { MessageModule } from './contact/message.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3307,
      username: 'root',
      password: 'root',
      database: 'zen_bit_tech_test',
      entities: [Message],
      synchronize: true,
    }),
    MessageModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
