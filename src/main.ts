import { NestFactory } from '@nestjs/core';
import {
  FastifyAdapter,
  NestFastifyApplication,
} from '@nestjs/platform-fastify';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { AppModule } from './app.module';

async function bootstrap() {
  const serverPort = 8090;
  const serverHost = '0.0.0.0';
  const fastifyAdaptor = new FastifyAdapter({});
  const app = await NestFactory.create<NestFastifyApplication>(
    AppModule,
    fastifyAdaptor,
  );
  const options = new DocumentBuilder()
    .setTitle('test')
    .setDescription('test')
    .setVersion('1.0')
    .build();
  const document = SwaggerModule.createDocument(app, options);

  SwaggerModule.setup('api', app, document);
  await app.listen(serverPort, serverHost, (err, address) => {
    if (err) {
      console.log(err);
    } else {
      console.log(`app run in ${address}`);
    }
  });
}
bootstrap();
