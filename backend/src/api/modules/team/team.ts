import {PickType} from "@nestjs/swagger";
import {Column, Entity, OneToMany} from 'typeorm';
import {BaseDbEntity} from "@iWatchFootball/base-tools/entity/baseDb.entity";
import {Stadium} from "../stadium/stadium";
import {TeamCompetitionSeason} from "../teamCompetitionSeason/teamCompetitionSeason";


@Entity('team')
export class Team extends BaseDbEntity {

    @Column()
    name!: string;

    @Column()
    founded!: number;

    @Column()
    stadiumId!: number;

    @OneToMany(() => Stadium, stadium => stadium.teams)
    stadium?: Stadium

    @OneToMany(() => TeamCompetitionSeason, teamCompSeason => teamCompSeason.team)
    teamCompetitionSeasons!: TeamCompetitionSeason[];

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

export class CreateTeamDto extends PickType(Team, ["name", "founded", "stadiumId", "managerId", "website", "logoUrl", "city", "country"] as const) {}