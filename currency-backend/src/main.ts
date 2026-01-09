import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

   app.enableCors({
    origin: [
      "http://localhost:5173",
      "https://currency-convertor-6xwp.vercel.app"
    ],
   methods: 'GET,POST,OPTIONS',
    allowedHeaders: 'Content-Type, Authorization',

  });

  // 🔹 Swagger config
  if (process.env.NODE_ENV !== 'production') {
    const config = new DocumentBuilder()
      .setTitle('Currency API')
      .setDescription('Currency Converter APIs')
      .setVersion('1.0')
      .build();

    const document = SwaggerModule.createDocument(app, config);
    SwaggerModule.setup('swagger', app, document);
  }
  await app.listen(3000);
}
bootstrap();
