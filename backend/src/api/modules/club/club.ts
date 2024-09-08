import {PickType} from "@nestjs/swagger";
import {Column, Entity, OneToMany} from 'typeorm';
import {BaseDbEntity} from "@footyTrackr/base-tools/entity/baseDb.entity";
import {Stadium} from "../stadium/stadium";
import {ClubCountryCompetitionSeason} from "../clubCountryCompetitionSeason/clubCountryCompetitionSeason";


@Entity('club')
export class Club extends BaseDbEntity {

    @Column()
    name!: string;

    @Column()
    founded!: number;

    @Column()
    stadiumId!: number;

    @OneToMany(() => Stadium, stadium => stadium.clubs)
    stadium?: Stadium

    @OneToMany(() => ClubCountryCompetitionSeason, clubCountryCompSeason => clubCountryCompSeason.club)
    clubCountryCompetitionSeasons!: ClubCountryCompetitionSeason[];




    @Column()
    managerId!: number;


    @Column()
    logoUrl!: string;

    @Column()
    website?: string;

    @Column()
    city!: string;

    @Column()
    country!: string;


}

export class CreateClubDto extends PickType(Club, ["name", "founded", "stadiumId", "managerId", "website", "logoUrl", "city", "country"] as const) {}