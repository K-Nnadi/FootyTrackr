import {
	ArrayContains,
	Between,
	DeepPartial,
	DeleteResult, FindOptionsRelations,
	FindOptionsWhere,
	ILike,
	In,
	LessThan,
	LessThanOrEqual,
	MoreThan,
	MoreThanOrEqual,
	Not,
	ObjectLiteral,
	Raw,
	Repository
} from 'typeorm';
import type { FindManyOptions } from 'typeorm/find-options/FindManyOptions';
import type { CrudInterface } from './crud.interface';
import { Logger } from '@nestjs/common';
import { recurseWithAsyncValueFunction, recurseWithObjFunction } from '../helpers';
import { QueryOptions } from './crud.controller';

export class CrudRepoAdapter<T extends ObjectLiteral & { id: number }, U extends ObjectLiteral> implements CrudInterface<T, U> {

	keys = ['$gte', '$lte', '$btwn', '$gt', '$lt', '$not', '$in', '$like', '$raw', '$contains'];
	private logger = new Logger(CrudRepoAdapter.name);

	constructor(private repository: Repository<T>) {}

	async getAll(): Promise<T[]> {
		this.logger.log(`getAll - ${this.repository.metadata.name}`)
		return this.repository.find();
	}

	async getQuery(query: FindManyOptions<T>): Promise<T[]> {
		this.logger.log(`getQuery - ${this.repository.metadata.name} - ${JSON.stringify(query)}`)
		const finalQuery = await this.parseQueryOptions(query)
		return this.repository.find(finalQuery);
	}

	async getOne(findId: number): Promise<T | null> {
		this.logger.log(`getOne - ${this.repository.metadata.name} - ${findId}`, 'CRUD REPO ADAPTER')
		return this.repository.findOneBy({id: findId.toString()} as unknown as FindOptionsWhere<T>);
	}

	async create(entity: U): Promise<any | null> {
		this.logger.log(`create - ${this.repository.metadata.name} - ${JSON.stringify(entity)}`)
		// @ts-ignore`
		const resp = this.repository.save(entity);
		return resp
	}

	async update(id: number, entity: DeepPartial<T>): Promise<DeepPartial<T> | null> {
		this.logger.log(`update - ${this.repository.metadata.name} - ${id} - ${JSON.stringify(entity)}`)
		const resp = await this.repository.save(entity)
		return resp
	}

	async delete(id: number): Promise<DeleteResult | null> {
		this.logger.log(`delete - ${this.repository.metadata.name} - ${id}`)
		const resp = await this.repository.softDelete(id)
		return resp.raw
	}

	parseQueryOptions = async (query: FindManyOptions<T>): Promise<FindManyOptions<T>> => {
		let parsedRelations: object | FindOptionsRelations<T>;

		if (query.relations) {
			parsedRelations = (await recurseWithAsyncValueFunction(query.relations, async (obj, key, val) => {
				if (val === 'true') {
					return true;
				} else {
					return val;
				}
			})) as FindOptionsRelations<T>;
		} else {
			parsedRelations = {};
		}

		console.log(query.where)

		const parsedWhere = await recurseWithObjFunction(
			query.where,
			(obj: any) => {
				return Object.keys(obj).length === 1 && Object.keys(obj).some((key) => this.keys.includes(key));
			},
			(obj: any) => {
				const specialKey = Object.keys(obj)[0];
				switch (specialKey) {
					case '$gte':
						return MoreThanOrEqual(obj[specialKey]);
					case '$lte':
						return LessThanOrEqual(obj[specialKey]);
					case '$btwn':
						return Between(obj[specialKey][0], obj[specialKey][1]);
					case '$gt':
						return MoreThan(obj[specialKey]);
					case '$lt':
						return LessThan(obj[specialKey]);
					case '$not':
						return Not(obj[specialKey]);
					case '$in':
						return In(obj[specialKey]);
					case '$like':
						return ILike(obj[specialKey]);
					case '$raw':
						return Raw(obj[specialKey]);
					case '$contains':
						return ArrayContains(obj[specialKey]);
					default:
						return obj;
				}
			}
		);

		return {
			...query,
			where: parsedWhere,
			relations: parsedRelations
		};
	};
}
