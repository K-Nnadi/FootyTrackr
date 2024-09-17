import {PickType} from "@nestjs/swagger";
import {Column, Entity, ManyToMany, ManyToOne, OneToMany} from 'typeorm';
import {BaseDbEntity} from "@iWatchFootball/base-tools/entity/baseDb.entity";
import {Stadium} from "../stadium/stadium";
import {TeamCompetitionSeason} from "../teamCompetitionSeason/teamCompetitionSeason";
import {TeamType} from "../../enums/team.enum";
import {Manager} from "../manager/manager";
import {Player} from "../player/player";


@Entity('team')
export class Team extends BaseDbEntity {

    @Column()
    name!: string;

    @Column()
    founded!: number;

    @Column("int", { array: true, nullable: true })
    stadiumIds?: number[];

    @ManyToMany(() => Stadium, stadium => stadium.teams)
    stadiums?: Stadium[]

    @OneToMany(() => TeamCompetitionSeason, teamCompSeason => teamCompSeason.team)
    teamCompetitionSeasons!: TeamCompetitionSeason[];

    @Column("int", { nullable: true })
    managerId?: number;

    @ManyToOne(() => Manager, manager => manager.teams)
    manager?: Manager;

    @Column("int", { array: true, nullable: true })
    playerIds?: number[]

    @ManyToMany(() => Player, player => player.teams)
    players?: Player[]

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