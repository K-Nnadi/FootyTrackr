import {PickType} from "@nestjs/swagger";
import {Column, Entity} from "typeorm";
import {BaseDbEntity} from "@fl/base-tools/entity/baseDb.entity";


@Entity('manager')

export class Manager extends BaseDbEntity{
    @Column()
    firstName!: string

    @Column()
    lastName!: string

    @Column()
    nationality!: string

    @Column()
    currentClub!: string
}


export class CreateManagerDto extends PickType(Manager, ["firstName", "lastName", "nationality", "currentClub"] as const) {}