import { Type } from '@nestjs/common';
import { CrudInterface } from "./crud.interface";
export interface ServiceInterface<T, U> extends Omit<CrudInterface<T, U>, "getQuery"> {
}
export declare const CrudService: <T, U>(entity: any, createDTO: any) => Type<CrudInterface<T, U>>;
