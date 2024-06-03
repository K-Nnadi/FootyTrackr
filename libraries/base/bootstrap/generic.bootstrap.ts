import {NestFactory} from '@nestjs/core';
import {DocumentBuilder, SwaggerModule} from '@nestjs/swagger';
import {FastifyAdapter, NestFastifyApplication} from "@nestjs/platform-fastify";
import {NestApplicationOptions} from "@nestjs/common";


export const SWAGGER_DOCUMENT =  new DocumentBuilder()
    .setTitle('Football Logger API')
    .setDescription('The API Docs for Football Logger')
    .setVersion('1.0')
    .build();

export async function GenericBootstrap(module: any, port: number) {
    const fastifyAdapter = new FastifyAdapter() as NestApplicationOptions

    // @ts-ignore
    const app = await NestFactory.create<NestFastifyApplication>(
        module,
        fastifyAdapter
    );


    const document = SwaggerModule.createDocument(app, SWAGGER_DOCUMENT, {ignoreGlobalPrefix: false});
    SwaggerModule.setup('backend-docs', app, document);
    await app.listen(port);
}
