import {PickType} from "@nestjs/swagger";
import {Column, Entity, JoinTable, ManyToMany, OneToMany} from 'typeorm';
import {BaseDbEntity} from "@footyTrackr/base-tools/entity/baseDb.entity";
import {Stadium} from "../stadium/stadium";
import {ClubCountryCompetitionSeason} from "../clubCountryCompetitionSeason/clubCountryCompetitionSeason";


@Entity('country')

export class Country extends BaseDbEntity {

    @Column()
    name!: string;

    @Column()
    founded?: number;

    @ManyToMany(() => Stadium, stadium => stadium.countries)
    @JoinTable()
    stadiums!: Stadium[];

    @OneToMany(() => ClubCountryCompetitionSeason, clubCountryCompSeason => clubCountryCompSeason.country)
    clubCountryCompetitionSeasons!: ClubCountryCompetitionSeason[];

    @Column()
    managerId!: number;

    @Column()
    logoUrl!: string;
}

export class CreateCountryDto extends PickType(Country, ["name", "founded", "stadiums", "managerId", "logoUrl"] as const) {}