import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { AppModule } from './app.module';

import { patchNestJsSwagger } from 'nestjs-zod';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  patchNestJsSwagger();
  const config = new DocumentBuilder()
    .setTitle('NFC Health Security')
    .setDescription(
      `This API is used to access and store patient medical history.`,
    )
    .setVersion('1.0')
    .addTag('auth')
    .addTag('user')
    .addTag('person')
    .addBearerAuth()
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('docs', app, document);

  await app.listen(3000);
}
bootstrap();
