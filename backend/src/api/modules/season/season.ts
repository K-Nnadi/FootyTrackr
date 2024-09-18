import { PickType } from '@nestjs/swagger';
import {Column, Entity, OneToMany} from 'typeorm';
import { BaseDbEntity } from '@iWatchFootball/base-tools/entity/baseDb.entity';
import {TeamCompetitionSeason} from "../teamCompetitionSeason/teamCompetitionSeason";

@Entity('season')
export class Season extends BaseDbEntity {
    @Column()
    yearStart!: number; // e.g., 2023 for 2023/2024 season

    @Column()
    yearEnd!: number;   // e.g., 2024

    @OneToMany(() => TeamCompetitionSeason, teamCompSeason => teamCompSeason.season)
    teamCompetitionSeasons!: TeamCompetitionSeason[];
}

export class CreateSeasonDTO extends PickType(Season, ['yearStart', 'yearEnd'] as const) {}