import { ColumnOptions } from 'typeorm/decorator/options/ColumnOptions';
import { ApiPropertyOptions } from '@nestjs/swagger/dist/decorators/api-property.decorator';
interface EntityColumnDecorator {
    db?: ColumnOptions;
    api?: ApiPropertyOptions;
}
type DecoratorReturn = <TFunction extends () => void, Y>(target: object | TFunction, propertyKey?: string | symbol | undefined, descriptor?: TypedPropertyDescriptor<Y> | undefined) => void;
export declare function EntityColumn(opts?: EntityColumnDecorator): DecoratorReturn;
export declare function OptionalEntityColumn(opts?: EntityColumnDecorator): DecoratorReturn;
export {};
