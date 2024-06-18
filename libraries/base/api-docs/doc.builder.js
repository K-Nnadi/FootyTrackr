"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SWAGGER_DOCUMENT = void 0;
const swagger_1 = require("@nestjs/swagger");
exports.SWAGGER_DOCUMENT = new swagger_1.DocumentBuilder()
    .setTitle('Football Logger API')
    .setDescription('The API Docs for Football Logger')
    .setVersion("0.0.1")
    .build();
//# sourceMappingURL=doc.builder.js.map