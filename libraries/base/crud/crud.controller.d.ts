import { Type } from '@nestjs/common';
import { CrudInterface } from "./crud.interface";
export interface ControllerInterface<T, U> extends Omit<CrudInterface<T, U>, "getQuery"> {
}
export declare const CrudController: <T, U>(entity: any, createDTO: any) => Type<CrudInterface<T, U>>;
