import {NestFactory} from '@nestjs/core';
import {SwaggerModule, DocumentBuilder} from '@nestjs/swagger';
import {AppModule} from "./app.module";
import {NestFastifyApplication, FastifyAdapter} from "@nestjs/platform-fastify";
import packageJson from './../package.json'
import {NestApplicationOptions} from "@nestjs/common";

async function bootstrap() {
    const fastifyAdapter = new FastifyAdapter() as NestApplicationOptions

    const {version} = packageJson

    // @ts-ignore
    const app = await NestFactory.create<NestFastifyApplication>(
        AppModule,
        fastifyAdapter
    );

    const config = new DocumentBuilder()
        .setTitle('Football Logger API')
        .setDescription('The API Docs for Football Logger')
        .setVersion(version)
        .build();
    const document = SwaggerModule.createDocument(app, config, {ignoreGlobalPrefix: false});
    SwaggerModule.setup('api-docs', app, document);
    await app.listen(3000);
}

bootstrap();
