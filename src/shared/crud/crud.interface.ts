import {DeepPartial, DeleteResult} from 'typeorm';

export interface CrudInterface<T, U> {
	create(entity: U): Promise<T | null>

	getAll(): Promise<T[]>

	getOne(id: number): Promise<T | null>

	update(id: number, body: DeepPartial<T>): Promise<DeepPartial<T> | null>

	delete(id: number): Promise<DeleteResult | null>
}
