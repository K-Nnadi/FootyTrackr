import {CreateDateColumn, DeleteDateColumn, PrimaryGeneratedColumn, UpdateDateColumn} from "typeorm";
import {ApiProperty, ApiPropertyOptional} from "@nestjs/swagger";

export abstract class BaseDbEntity {

	@PrimaryGeneratedColumn()
	@ApiProperty()
	id!: number;

	@CreateDateColumn()
	@ApiPropertyOptional()
	createdAt!: string

	@UpdateDateColumn()
	@ApiPropertyOptional()
	updatedAt!: string

	@DeleteDateColumn()
	@ApiPropertyOptional()
	deletedAt!: string
}
