// import { NestFactory } from '@nestjs/core';
// import { AppModule } from './app.module';
// import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
// import helmet from 'helmet';

// async function bootstrap() {
//   const app = await NestFactory.create(AppModule);
//   app.use(helmet());
//   app.enableCors();
//   app.setGlobalPrefix('api');

//   const config = new DocumentBuilder()
//     .setTitle('prime nestjs')
//     .setDescription('Boilerplate for nestjs')
//     .setVersion('1.0')
//     .addTag('api')
//     .build();

//   const document = SwaggerModule.createDocument(app, config);
//   SwaggerModule.setup('api', app, document);

//   await app.listen(3031);
// }
// bootstrap();

import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors(); // Enable CORS if necessary
  await app.listen(3000);
}
bootstrap();

