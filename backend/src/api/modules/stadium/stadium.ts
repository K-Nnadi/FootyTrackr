import {PickType} from "@nestjs/swagger";
import {Column, Entity, ManyToMany, OneToMany, OneToOne} from "typeorm";
import {BaseDbEntity} from "@iWatchFootball/base-tools/entity/baseDb.entity";
import {Address} from "../address/address";
import {Team} from "../team/team";
import {Fixture} from "../fixture/fixture";


@Entity('stadium')

export class Stadium extends BaseDbEntity{

    @Column()
    name!: string

    @Column()
    opened?: string

    @Column("int", { array: true, nullable: true })
    teamIds?: number[]

    @ManyToMany(() => Team, team => team.stadiums)
    teams!: Team[]

    @Column()
    capacity!: number

    @Column()
    addressId?: number

    @OneToOne(() => Address, address => address.stadium)
    address?: Address

    @OneToMany(() => Fixture, fixture => fixture.stadium)
    fixtures?: Fixture[]
}

export class CreateStadiumDto extends PickType(Stadium, ["name", "opened", "teamIds", "capacity", "addressId"] as const){}