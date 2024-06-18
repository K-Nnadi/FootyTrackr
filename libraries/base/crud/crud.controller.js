"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CrudController = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const CrudController = (entity, createDTO) => {
    class crudController {
        constructor(service) {
            this.service = service;
        }
        create(entity) {
            return this.service.create(entity);
        }
        getAll() {
            return this.service.getAll();
        }
        // @Get()
        // @ApiOperation({operationId: `getQuery`})
        // getQuery(@Req() request: FastifyRequest,
        //          @Query('skip', new DefaultValuePipe(0), ParseIntPipe) skip: number,
        //          @Query('take', new DefaultValuePipe(100), ParseIntPipe) take: number,
        //          @Query('withDeleted', new DefaultValuePipe(false), ParseBoolPipe) withDeleted: boolean,
        //          @Query('loadEagerRelations', new DefaultValuePipe(true), ParseBoolPipe) loadEagerRelations: boolean,
        //          @Query('transaction', new DefaultValuePipe(false), ParseBoolPipe) transaction: boolean,
        //          @Query('comment') comment: string) {
        //     const query = qs.parse(request.url.split('?')[1], QS_OPTIONS)
        //     return this.service.getQuery({...query, skip, take, withDeleted, loadEagerRelations, transaction});
        // }
        getOne(id) {
            return this.service.getOne(+id);
        }
        update(id, entity) {
            return this.service.update(+id, entity);
        }
        delete(id) {
            return this.service.delete(+id);
        }
    }
    __decorate([
        (0, common_1.Post)(),
        (0, swagger_1.ApiOperation)({ operationId: `create` }),
        (0, swagger_1.ApiBody)({ type: createDTO }),
        __param(0, (0, common_1.Body)()),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", void 0)
    ], crudController.prototype, "create", null);
    __decorate([
        (0, common_1.Get)(),
        (0, swagger_1.ApiOperation)({ operationId: `getAll` }),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], crudController.prototype, "getAll", null);
    __decorate([
        (0, common_1.Get)(':id'),
        (0, swagger_1.ApiOperation)({ operationId: `getOne` }),
        __param(0, (0, common_1.Param)('id')),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Number]),
        __metadata("design:returntype", void 0)
    ], crudController.prototype, "getOne", null);
    __decorate([
        (0, common_1.Patch)(':id'),
        (0, swagger_1.ApiOperation)({ operationId: `updateOne` }),
        (0, swagger_1.ApiBody)({ type: entity }),
        __param(0, (0, common_1.Param)('id')),
        __param(1, (0, common_1.Body)()),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Number, Object]),
        __metadata("design:returntype", void 0)
    ], crudController.prototype, "update", null);
    __decorate([
        (0, common_1.Delete)(':id'),
        (0, swagger_1.ApiOperation)({ operationId: `deleteOne` }),
        __param(0, (0, common_1.Param)('id')),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Number]),
        __metadata("design:returntype", void 0)
    ], crudController.prototype, "delete", null);
    return crudController;
};
exports.CrudController = CrudController;
//# sourceMappingURL=crud.controller.js.map