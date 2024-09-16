import {PickType} from "@nestjs/swagger";
import {Column, Entity, ManyToMany, OneToMany, OneToOne} from "typeorm";
import {BaseDbEntity} from "@iWatchFootball/base-tools/entity/baseDb.entity";
import {Address} from "../address/address";
import {Team} from "../team/team";
import {Fixture} from "../fixture/fixture";
import {Country} from "../country/country";


@Entity('stadium')

export class Stadium extends BaseDbEntity{

    @Column()
    name!: string

    @Column()
    opened?: string

    @Column()
    teamIds!: number[]

    @OneToMany(() => Team, team => team.stadium)
    teams!: Team[]

    @ManyToMany(() => Country, country => country.stadiums)
    countries!: Team[]

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