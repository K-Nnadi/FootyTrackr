import {PickType} from "@nestjs/swagger";
import {Column, Entity, ManyToMany, OneToMany, OneToOne} from "typeorm";
import {BaseDbEntity} from "@footyTrackr/base-tools/entity/baseDb.entity";
import {Address} from "../address/address";
import {Club} from "../club/club";
import {Fixture} from "../fixture/fixture";
import {Country} from "../country/country";


@Entity('stadium')

export class Stadium extends BaseDbEntity{

    @Column()
    name!: string

    @Column()
    opened?: string

    @Column()
    clubIds!: number[]

    @OneToMany(() => Club, club => club.stadium)
    clubs!: Club[]

    @ManyToMany(() => Country, country => country.stadiums)
    countries!: Club[]

    @Column()
    capacity!: number

    @Column()
    addressId?: number

    @OneToOne(() => Address, address => address.stadium)
    address?: Address

    @OneToMany(() => Fixture, fixture => fixture.stadium)
    fixtures?: Fixture[]
}

export class CreateStadiumDto extends PickType(Stadium, ["name", "opened", "clubIds", "capacity", "addressId"] as const){}