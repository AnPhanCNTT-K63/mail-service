import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { Transport } from '@nestjs/microservices';
import * as dotenv from 'dotenv';
dotenv.config();

async function bootstrap() {
  const app = await NestFactory.createMicroservice(AppModule, {
    transport: Transport.RMQ,
    options: {
      urls: [process.env.RABBITMQ_URL],
      queue: 'email_queue',
      queueOptions: { durable: true },
    },
  });

  await app.listen();
  console.log('🚀 Mail Service is listening to RabbitMQ...');
}
bootstrap();
