import {PickType} from "@nestjs/swagger";
import {Column, Entity, ManyToOne, OneToMany} from 'typeorm';
import {BaseDbEntity} from "@footyTrackr/base-tools/entity/baseDb.entity";
import {Stadium} from "../stadium/stadium";

import {Club} from "../club/club";
import {FixtureStatus} from "../../enums/fixture.enum";
import {Season} from "../season/season";
import {Goal} from "../goal/goal";
import {Competition} from "../competition/competition";
import {FixtureReferee} from "../fixtureReferee/fixtureReferee";
import {LineUp} from "../lineUp/lineUp";
import {Country} from "../country/country";

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

    @ManyToOne(() => Competition, competition => competition.fixtures, { eager: true })
    competition!: Competition;

    @Column()
    stadiumId!: number;

    @ManyToOne(() => Stadium, stadium => stadium.fixtures, { eager: true })
    stadium!: Stadium;

    @ManyToOne(() => Season, season => season.fixtures, { eager: true })
    season: Season;

    @OneToMany(() => Goal, goal => goal.fixture, { cascade: true })
    goals!: Goal[];

    @OneToMany(() => FixtureReferee, fixtureReferee => fixtureReferee.fixture)
    referees!: FixtureReferee[];

    @Column({ default: FixtureStatus.SCHEDULED })
    status!: FixtureStatus;

    @Column({ nullable: true })
    attendance?: number;

}


export class CreateFixtureDto extends PickType(Fixture, ["homeClubId", "awayClubId", "competitionId", "stadiumId", "date", "time", "scoreHome", "scoreAway", "status"] as const) {}
