import {PickType} from "@nestjs/swagger";
import {Column, Entity, OneToMany} from "typeorm";
import {BaseDbEntity} from "@iWatchFootball/base-tools/entity/baseDb.entity";
import {Team} from "../team/team";
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
    currentTeam?: number

    @OneToMany(() => ManagerEmployment, employment => employment.manager)
    employments!: ManagerEmployment[];
}


export class CreateManagerDto extends PickType(Manager, ["name", "nickname","nationality", "currentTeam"] as const) {}