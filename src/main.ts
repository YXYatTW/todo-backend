import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { SwaggerModule } from '@nestjs/swagger';
import type { OpenAPIObject } from '@nestjs/swagger';
import * as yaml from 'js-yaml';
import * as fs from 'fs';
import * as path from 'path';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // Load Swagger specification from YAML file
  const swaggerPath = path.join(__dirname, '..', 'swagger.yaml');
  const swaggerDocument = yaml.load(
    fs.readFileSync(swaggerPath, 'utf8'),
  ) as OpenAPIObject;

  // Setup Swagger UI with the YAML document
  SwaggerModule.setup('api', app, swaggerDocument);

  await app.listen(process.env.PORT ?? 3001);
}
void bootstrap();
