import {PickType} from "@nestjs/swagger";
import {Column, Entity, OneToMany} from "typeorm";
import {BaseDbEntity} from "@footyTrackr/base-tools/entity/baseDb.entity";
import {Club} from "../club/club";
import {ManagerEmployment} from "../managerEmployment/managerEmployment";


@Entity('manager')

export class Manager extends BaseDbEntity{
    @Column()
    name!: string

    @Column()
    nickname!: string

    @Column()
    nationality!: string

    @Column()
    currentClub?: number

    @OneToMany(() => ManagerEmployment, employment => employment.manager)
    employments!: ManagerEmployment[];
}


export class CreateManagerDto extends PickType(Manager, ["name", "nickname","nationality", "currentClub"] as const) {}