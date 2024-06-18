"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.GenericBootstrap = exports.SWAGGER_DOCUMENT = void 0;
const core_1 = require("@nestjs/core");
const swagger_1 = require("@nestjs/swagger");
const platform_fastify_1 = require("@nestjs/platform-fastify");
exports.SWAGGER_DOCUMENT = new swagger_1.DocumentBuilder()
    .setTitle('Football Logger API')
    .setDescription('The API Docs for Football Logger')
    .setVersion('1.0')
    .build();
function GenericBootstrap(module, port) {
    return __awaiter(this, void 0, void 0, function* () {
        const fastifyAdapter = new platform_fastify_1.FastifyAdapter();
        // @ts-ignore
        const app = yield core_1.NestFactory.create(module, fastifyAdapter);
        const document = swagger_1.SwaggerModule.createDocument(app, exports.SWAGGER_DOCUMENT, { ignoreGlobalPrefix: false });
        swagger_1.SwaggerModule.setup('backend-docs', app, document);
        yield app.listen(port);
    });
}
exports.GenericBootstrap = GenericBootstrap;
//# sourceMappingURL=generic.bootstrap.js.map