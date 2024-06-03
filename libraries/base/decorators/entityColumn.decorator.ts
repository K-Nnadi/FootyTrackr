import { applyDecorators } from '@nestjs/common';
import { Column } from 'typeorm';
import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { ColumnOptions } from 'typeorm/decorator/options/ColumnOptions';
import { ApiPropertyOptions } from '@nestjs/swagger/dist/decorators/api-property.decorator';

interface EntityColumnDecorator {
	db?: ColumnOptions;
	api?: ApiPropertyOptions;
}

type DecoratorReturn = <TFunction extends () => void, Y>(target: object | TFunction, propertyKey?: string | symbol | undefined, descriptor?: TypedPropertyDescriptor<Y> | undefined) => void

export function EntityColumn(opts?: EntityColumnDecorator): DecoratorReturn {
	return applyDecorators(
		Column(opts?.db || {}),
		ApiProperty(opts?.api)
	);
}

export function OptionalEntityColumn(opts?: EntityColumnDecorator): DecoratorReturn {
	return applyDecorators(
		Column({ ...opts?.db, nullable: true } || {}),
		ApiPropertyOptional(opts?.api)
	);
}
