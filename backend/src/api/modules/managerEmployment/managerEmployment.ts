import {PickType} from "@nestjs/swagger";
import {Column, Entity, JoinColumn, ManyToOne, OneToMany} from "typeorm";
import {BaseDbEntity} from "@iWatchFootball/base-tools/entity/baseDb.entity";
import {Team} from "../team/team";
import {Manager} from "../manager/manager";


@Entity('managerEmployment')
export class ManagerEmployment extends BaseDbEntity {

    @Column()
    managerId!: number;

    @ManyToOne(() => Manager, manager => manager.employments)
    manager!: Manager;

    @Column()
    teamId!: number;

    @ManyToOne(() => Team, { nullable: true })
    team!: Team;

    @Column()
    startDate!: Date;

    @Column({ nullable: true })
    endDate?: Date;

    @Column({ default: false })
    isCurrent!: boolean;
}



export class CreateManagerEmploymentDTO extends PickType(ManagerEmployment, [] as const) {}