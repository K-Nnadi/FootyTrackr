import {PickType} from "@nestjs/swagger";
import {Column, Entity, ManyToOne, OneToMany} from 'typeorm';
import {BaseDbEntity} from "@iWatchFootball/base-tools/entity/baseDb.entity";
import {Team} from "../team/team";
import {Competition} from "../competition/competition";
import {Season} from "../season/season";
import {Fixture} from "../fixture/fixture";


@Entity('teamCompetitionSeason')
export class TeamCompetitionSeason extends BaseDbEntity {
    @Column()
    teamId!: number;

    @ManyToOne(() => Team, team => team.teamCompetitionSeasons)
    team!: Team;
    
    @Column()
    competitionId!: number;

    @ManyToOne(() => Competition, competition => competition.teamCompetitionSeasons)
    competition!: Competition;

    @Column()
    seasonId!: number;

    @ManyToOne(() => Season, season => season.teamCompetitionSeasons)
    season!: Season;

    @OneToMany(() => Fixture, fixture => fixture.teamCompetitionSeasons)
    fixtures?: Fixture[];

    @Column({nullable: true})
    points?: number; // Optional: Store points for league competitions

    @Column({nullable: true})
    position?: number; // Optional: Store the position in the competition for that season
}

export class CreateTeamCompetitionSeasonDto extends PickType(TeamCompetitionSeason, ['teamId', 'competitionId', 'seasonId', 'points', 'position'] as const) {}