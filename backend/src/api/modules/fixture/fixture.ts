import {PickType} from "@nestjs/swagger";
import {Column, Entity, ManyToOne, OneToMany} from 'typeorm';
import {BaseDbEntity} from "@iWatchFootball/base-tools/entity/baseDb.entity";
import {Stadium} from "../stadium/stadium";
import {Team} from "../team/team";
import {FixtureStatus} from "../../enums/fixture.enum";
import {Goal} from "../goal/goal";
import {FixtureReferee} from "../fixtureReferee/fixtureReferee";
import {LineUp} from "../lineUp/lineUp";
import {TeamCompetitionSeason} from "../teamCompetitionSeason/teamCompetitionSeason";

@Entity('fixture')
export class Fixture extends BaseDbEntity {
    @Column()
    date!: Date;

    @Column()
    homeTeamId?: number;

    @ManyToOne(() => Team, { eager: true, nullable: true })
    homeTeam?: Team;

    @Column()
    awayTeamId?: number;

    @ManyToOne(() => Team, { eager: true, nullable: true })
    awayTeam?: Team;

    @OneToMany(() => LineUp, lineUp => lineUp.fixture)
    lineUps!: LineUp[];

    @Column()
    competitionId!: number;

    @Column()
    seasonId!: number;

    @ManyToOne(() => TeamCompetitionSeason, teamCompetitionSeason => teamCompetitionSeason.fixtures)
    teamCompetitionSeasons!: TeamCompetitionSeason;

    @Column()
    stadiumId!: number;

    @ManyToOne(() => Stadium, stadium => stadium.fixtures, { eager: true })
    stadium!: Stadium;

    @OneToMany(() => Goal, goal => goal.fixture, { cascade: true })
    goals!: Goal[];

    @OneToMany(() => FixtureReferee, fixtureReferee => fixtureReferee.fixture)
    referees!: FixtureReferee[];

    @Column({ default: FixtureStatus.SCHEDULED })
    status!: FixtureStatus;

    @Column({ nullable: true })
    attendance?: number;

}


export class CreateFixtureDto extends PickType(Fixture, ["homeTeamId", "awayTeamId", "competitionId", "stadiumId", "date", "attendance", "status", "seasonId"] as const) {}
