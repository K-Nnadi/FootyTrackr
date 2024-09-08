import {PickType} from "@nestjs/swagger";
import {Column, Entity, JoinColumn, ManyToOne, OneToMany} from "typeorm";
import {BaseDbEntity} from "@footyTrackr/base-tools/entity/baseDb.entity";
import {Club} from "../club/club";
import {Manager} from "../manager/manager";
import {Country} from "../country/country";


@Entity('managerEmployment')
export class ManagerEmployment extends BaseDbEntity {

    @Column()
    managerId!: number;

    @ManyToOne(() => Manager, manager => manager.employments)
    manager!: Manager;

    @Column()
    clubId?: number;

    @ManyToOne(() => Club, club => club.employments, { nullable: true })
    club?: Club;

    @Column()
    countryId?: number;

    @ManyToOne(() => Country, country => country.employments, { nullable: true })
    country?: Country;

    @Column()
    startDate!: Date;

    @Column({ nullable: true })
    endDate?: Date;

    @Column({ default: false })
    isCurrent!: boolean;
}



export class CreateManagerEmploymentDto extends PickType(ManagerEmployment, [] as const) {}