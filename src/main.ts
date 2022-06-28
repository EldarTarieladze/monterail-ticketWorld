import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.useGlobalPipes(new ValidationPipe({
    whitelist: true
  }));
  app.setGlobalPrefix('api')
  const config = new DocumentBuilder()
  .setTitle('TicketWorld')
  .setDescription('The TicketWorld API description')
  .setVersion('1.0')
  .addTag('TicketWorld')
  .build();
const document = SwaggerModule.createDocument(app, config);

SwaggerModule.setup('api/swagger', app, document);
  await app.listen(3000, () => {
    console.log(`server running at PORT = ${3000}`)
  });
}
bootstrap();