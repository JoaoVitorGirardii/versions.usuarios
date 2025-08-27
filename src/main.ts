import { NestFactory } from '@nestjs/core';
import { MicroserviceOptions, Transport } from '@nestjs/microservices';
import { AppModule } from './app.module';

async function bootstrap() {
  const HOST = process.env.HOST || '127.0.0.1';
  const PORT = process.env.PORT || 3001;

  const app = await NestFactory.createMicroservice<MicroserviceOptions>(
    AppModule,
    {
      transport: Transport.TCP,
      options: {
        host: HOST,
        port: PORT as number,
      },
    },
  );
  await app.listen();
}

bootstrap().catch((error) =>
  console.log('Error in project [USUARIOS]: ', error),
);
