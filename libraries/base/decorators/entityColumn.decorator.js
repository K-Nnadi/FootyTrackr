"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OptionalEntityColumn = exports.EntityColumn = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("typeorm");
const swagger_1 = require("@nestjs/swagger");
function EntityColumn(opts) {
    return (0, common_1.applyDecorators)((0, typeorm_1.Column)((opts === null || opts === void 0 ? void 0 : opts.db) || {}), (0, swagger_1.ApiProperty)(opts === null || opts === void 0 ? void 0 : opts.api));
}
exports.EntityColumn = EntityColumn;
function OptionalEntityColumn(opts) {
    return (0, common_1.applyDecorators)((0, typeorm_1.Column)(Object.assign(Object.assign({}, opts === null || opts === void 0 ? void 0 : opts.db), { nullable: true }) || {}), (0, swagger_1.ApiPropertyOptional)(opts === null || opts === void 0 ? void 0 : opts.api));
}
exports.OptionalEntityColumn = OptionalEntityColumn;
//# sourceMappingURL=entityColumn.decorator.js.map