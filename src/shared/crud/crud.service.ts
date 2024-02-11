import {DeepPartial} from 'typeorm';
import {Body, Delete, Get, Param, Patch, Post, Type} from '@nestjs/common';
import {ApiBody, ApiOperation} from '@nestjs/swagger';
import {CrudInterface} from "./crud.interface";


export interface ControllerInterface<T, U> extends Omit<CrudInterface<T, U>, "getQuery"> {
    // getQuery(request: FastifyRequest, skip?: number, take?: number, withDeleted?: boolean, loadEagerRelations?: boolean, transaction?: boolean, comment?: string, where?: any): Promise<T[]>
}


export const ServiceBuilder = <T, U>(entity: any, createDTO: any): Type<CrudInterface<T, U>> => {
    class crudController<T> implements CrudInterface<T, U> {
        constructor(private readonly service: CrudInterface<T, U>) {
        }

        @Post()
        @ApiOperation({operationId: `create`})
        @ApiBody({type: createDTO})
        create(@Body() entity: typeof createDTO) {
            return this.service.create(entity);
        }

        @Get()
        @ApiOperation({operationId: `getAll`})
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

        @Get(':id')
        @ApiOperation({operationId: `getOne`})
        getOne(@Param('id') id: number) {
            return this.service.getOne(+id);
        }

        @Patch(':id')
        @ApiOperation({operationId: `updateOne`})
        @ApiBody({type: entity})
        update(@Param('id') id: number, @Body() entity: DeepPartial<T>) {
            return this.service.update(+id, entity);
        }

        @Delete(':id')
        @ApiOperation({operationId: `deleteOne`})
        delete(@Param('id') id: number) {
            return this.service.delete(+id);
        }
    }

    return crudController
}
