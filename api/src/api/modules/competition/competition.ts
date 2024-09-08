import {PickType} from "@nestjs/swagger";
import {Column, Entity, OneToMany} from 'typeorm';
import {BaseDbEntity} from "@footyTrackr/base-tools/entity/baseDb.entity";
import {CompetitionType} from "../../enums/competition.enum";
import {ClubCountryCompetitionSeason} from "../clubCountryCompetitionSeason/clubCountryCompetitionSeason";
import {Trophy} from "../trophy/trophy";


@Entity('competition')
export class Competition extends BaseDbEntity {

    @Column()
    name!: string;

    @Column({ type: 'enum', enum: CompetitionType })
    type!: CompetitionType; // e.g., league, knockout

    @Column()
    country!: string;

    @OneToMany(() => ClubCountryCompetitionSeason, clubCountryCompSeason => clubCountryCompSeason.competition)
    clubCountryCompetitionSeasons!: ClubCountryCompetitionSeason[];

    @OneToMany(() => Trophy, trophy => trophy.competition)
    trophies!: Trophy[];
}

export class CreateCompetitionDto extends PickType(Competition, ["name", "type", "country"] as const) {}

