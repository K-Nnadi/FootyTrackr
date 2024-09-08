import {PickType} from "@nestjs/swagger";
import {Column, Entity, ManyToOne, OneToMany} from 'typeorm';
import {BaseDbEntity} from "@footyTrackr/base-tools/entity/baseDb.entity";
import {Stadium} from "../stadium/stadium";
import {Club} from "../club/club";
import {FixtureStatus} from "../../enums/fixture.enum";
import {Goal} from "../goal/goal";
import {FixtureReferee} from "../fixtureReferee/fixtureReferee";
import {LineUp} from "../lineUp/lineUp";
import {Country} from "../country/country";
import {ClubCountryCompetitionSeason} from "../clubCountryCompetitionSeason/clubCountryCompetitionSeason";

@Entity('fixture')
export class Fixture extends BaseDbEntity {
    @Column()
    date!: Date;

    @Column()
    homeClubId?: number;

    @ManyToOne(() => Club, { eager: true, nullable: true })
    homeClub?: Club;

    @Column()
    awayClubId?: number;

    @ManyToOne(() => Club, { eager: true, nullable: true })
    awayClub?: Club;

    @Column({ nullable: true })
    homeCountryId?: number;

    @ManyToOne(() => Country, { nullable: true })
    homeCountry?: Country;

    @Column({ nullable: true })
    awayCountryId?: number;

    @ManyToOne(() => Country,{ nullable: true })
    awayCountry?: Country;

    @OneToMany(() => LineUp, lineUp => lineUp.fixture)
    lineUps!: LineUp[];

    @Column()
    competitionId!: number;

    @Column()
    seasonId!: number;

    @ManyToOne(() => ClubCountryCompetitionSeason, clubCountryCompetitionSeason => clubCountryCompetitionSeason.fixtures)
    clubCountryCompetitionSeasons!: ClubCountryCompetitionSeason;

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


export class CreateFixtureDto extends PickType(Fixture, ["homeClubId", "awayClubId", "competitionId", "stadiumId", "date", "attendance", "status", "seasonId", "homeCountryId", "awayCountryId"] as const) {}
