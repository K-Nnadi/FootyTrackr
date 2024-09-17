import {PickType} from "@nestjs/swagger";
import {Column, Entity, ManyToMany, OneToMany} from 'typeorm';
import {BaseDbEntity} from "@iWatchFootball/base-tools/entity/baseDb.entity";
import {Stadium} from "../stadium/stadium";
import {TeamCompetitionSeason} from "../teamCompetitionSeason/teamCompetitionSeason";
import {TeamType} from "../../enums/team.enum";


@Entity('team')
export class Team extends BaseDbEntity {

    @Column()
    name!: string;

    @Column()
    founded!: number;

    @Column()
    stadiumIds!: number[];

    @ManyToMany(() => Stadium, stadium => stadium.teams)
    stadiums?: Stadium[]

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

    @Column({ type: 'enum', enum: TeamType })
    type?: TeamType;

    @Column()
    parentId?: number;

}

export class CreateTeamDto extends PickType(Team, ["name", "founded", "stadiumIds", "managerId", "website", "logoUrl", "city", "country", "type", "parentId"] as const) {}