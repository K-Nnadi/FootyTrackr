"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NoAuthController = exports.AuthedController = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
function AuthedController(tagAndPrefix) {
    return (0, common_1.applyDecorators)((0, common_1.Injectable)(), (0, swagger_1.ApiBearerAuth)(), (0, swagger_1.ApiUnauthorizedResponse)({ description: 'Unauthorized' }), (0, swagger_1.ApiTags)(tagAndPrefix === null || tagAndPrefix === void 0 ? void 0 : tagAndPrefix.replace('/', '-')), (0, common_1.Controller)(tagAndPrefix));
}
exports.AuthedController = AuthedController;
function NoAuthController(tagAndPrefix) {
    return (0, common_1.applyDecorators)((0, common_1.Injectable)(), (0, swagger_1.ApiTags)(tagAndPrefix === null || tagAndPrefix === void 0 ? void 0 : tagAndPrefix.replace('/', '-')), (0, common_1.Controller)(tagAndPrefix));
}
exports.NoAuthController = NoAuthController;
//# sourceMappingURL=controller.decorator.js.map