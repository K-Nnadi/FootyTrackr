import { PickType } from '@nestjs/swagger';
import {Column, Entity, OneToMany} from 'typeorm';
import { BaseDbEntity } from '@footyTrackr/base-tools/entity/baseDb.entity';
import {ClubCountryCompetitionSeason} from "../clubCountryCompetitionSeason/clubCountryCompetitionSeason";

@Entity('season')
export class Season extends BaseDbEntity {
    @Column()
    yearStart!: number; // e.g., 2023 for 2023/2024 season

    @Column()
    yearEnd!: number;   // e.g., 2024

    @OneToMany(() => ClubCountryCompetitionSeason, clubCountryCompSeason => clubCountryCompSeason.season)
    clubCountryCompetitionSeasons!: ClubCountryCompetitionSeason[];
}

export class CreateSeasonDto extends PickType(Season, ['yearStart', 'yearEnd'] as const) {}