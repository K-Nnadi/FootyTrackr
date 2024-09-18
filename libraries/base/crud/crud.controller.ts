import {DeepPartial} from 'typeorm';
import {
    Body,
    DefaultValuePipe,
    Delete,
    Get,
    Param,
    ParseBoolPipe,
    ParseIntPipe,
    Patch,
    Post,
    Query,
    Req,
    Type
} from '@nestjs/common';
import {ApiBody, ApiOkResponse, ApiOperation, ApiPropertyOptional} from '@nestjs/swagger';
import {CrudInterface} from "./crud.interface";
import {FastifyRequest} from "fastify";
import {QS_OPTIONS} from "./query.options";
import qs from 'qs';


export class QueryOptions<T> {
    @ApiPropertyOptional({type: Number})
    skip?: number;
    @ApiPropertyOptional({type: Number})
    take?: number;
    @ApiPropertyOptional({type: 'object'})
    select?: { [P in keyof T]?: boolean };
    @ApiPropertyOptional()
    where?: { [P in keyof T]?: T[P] } | { [P in keyof T]?: T[P] }[];
    @ApiPropertyOptional()
    relations?: { [P in keyof T]?: boolean };
    @ApiPropertyOptional()
    order?: { [P in keyof T]?: boolean };
    @ApiPropertyOptional()
    withDeleted?: boolean;
    @ApiPropertyOptional()
    loadEagerRelations?: boolean;
    @ApiPropertyOptional()
    transaction?: boolean;
    @ApiPropertyOptional()
    comment?: string;
}


export interface ControllerInterface<T, U> extends Omit<CrudInterface<T, U>, "getQuery"> {
    getQuery(request: FastifyRequest, skip?: number, take?: number, withDeleted?: boolean, loadEagerRelations?: boolean, transaction?: boolean, comment?: string, where?: any): Promise<T[]>
}


export const CrudController = <T, U>(entity: any, createDTO: any): Type<ControllerInterface<T, U>> => {
    class crudController<T> implements ControllerInterface<T, U> {
        constructor(private readonly service: CrudInterface<T, U>) {
        }

        @Post()
        @ApiOperation({summary: `Create ${entity.name}`, operationId: `create`})
        @ApiOkResponse({type: entity})
        @ApiBody({type: createDTO})
        create(@Body() entity: typeof createDTO) {
            return this.service.create(entity);
        }

        @Get()
        @ApiOperation({summary: `Get all ${entity.name}'s`, operationId: `getAll`})
        @ApiOkResponse({type: entity, isArray: true})
        getAll() {
            return this.service.getAll();
        }

        @Get('query')
        @ApiOperation({summary: `Get all ${entity.name}'s`, operationId: `getQuery`})
        @ApiOkResponse({type: entity, isArray: true})
        getQuery(@Req() request: FastifyRequest,
                 @Query('skip', new DefaultValuePipe(0), ParseIntPipe) skip: number,
                 @Query('take', new DefaultValuePipe(100), ParseIntPipe) take: number,
                 @Query('withDeleted', new DefaultValuePipe(false), ParseBoolPipe) withDeleted: boolean,
                 @Query('loadEagerRelations', new DefaultValuePipe(true), ParseBoolPipe) loadEagerRelations: boolean,
                 @Query('transaction', new DefaultValuePipe(false), ParseBoolPipe) transaction: boolean,
                 @Query('comment') comment: string) {

            const query = qs.parse(request.url.split('?')[1], QS_OPTIONS)
            return this.service.getQuery({...query, skip, take, withDeleted, loadEagerRelations, transaction});
        }

        @Get(':id')
        @ApiOperation({summary: `Get one ${entity.name}`, operationId: `getOne`})
        @ApiOkResponse({type: entity})
        getOne(@Param('id') id: number) {
            return this.service.getOne(+id);
        }

        @Patch(':id')
        @ApiOperation({summary: `Update one ${entity.name}`, operationId: `updateOne`})
        @ApiBody({type: entity})
        update(@Param('id') id: number, @Body() entity: DeepPartial<T>) {
            return this.service.update(+id, entity);
        }

        @Delete(':id')
        @ApiOperation({summary: `Delete one ${entity.name}`, operationId: `deleteOne`})
        delete(@Param('id') id: number) {
            return this.service.delete(+id);
        }
    }

    return crudController
}
