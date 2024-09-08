import {PickType} from "@nestjs/swagger";
import {Column, Entity, ManyToOne, OneToMany} from 'typeorm';
import {BaseDbEntity} from "@footyTrackr/base-tools/entity/baseDb.entity";
import {Club} from "../club/club";
import {Competition} from "../competition/competition";
import {Season} from "../season/season";
import {Country} from "../country/country";
import {Fixture} from "../fixture/fixture";


@Entity('clubCountryCompetitionSeason')
export class ClubCountryCompetitionSeason extends BaseDbEntity {
    @Column()
    clubId?: number;

    @ManyToOne(() => Club, club => club.clubCountryCompetitionSeasons)
    club?: Club;

    @Column()
    countryId?: number;

    @ManyToOne(() => Country, country => country.clubCountryCompetitionSeasons)
    country?: Country;

    @Column()
    competitionId!: number;

    @ManyToOne(() => Competition, competition => competition.clubCountryCompetitionSeasons)
    competition!: Competition;

    @Column()
    seasonId!: number;

    @ManyToOne(() => Season, season => season.clubCountryCompetitionSeasons)
    season!: Season;

    @OneToMany(() => Fixture, fixture => fixture.clubCountryCompetitionSeasons)
    fixtures?: Fixture[];

    @Column({nullable: true})
    points?: number; // Optional: Store points for league competitions

    @Column({nullable: true})
    position?: number; // Optional: Store the position in the competition for that season
}

export class CreateClubCountryCompetitionSeasonDto extends PickType(ClubCountryCompetitionSeason, ['clubId', 'competitionId', 'seasonId', 'points', 'position'] as const) {}