import { NestFactory } from '@nestjs/core';
import {
  FastifyAdapter,
  NestFastifyApplication,
} from '@nestjs/platform-fastify';
import { AppModule } from './app.module';

async function bootstrap() {
  // Default
  // const app = await NestFactory.create(AppModule);

  // Fastify
  const app = await NestFactory.create<NestFastifyApplication>(
    AppModule,
    new FastifyAdapter({
      ignoreTrailingSlash: true,
      logger: true,
    }),
  );

  await app.listen(process.env.PORT, '0.0.0.0');
}
bootstrap();
