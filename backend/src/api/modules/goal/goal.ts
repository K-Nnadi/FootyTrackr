import { PickType } from '@nestjs/swagger';
import {Column, Entity, ManyToOne} from 'typeorm';
import { BaseDbEntity } from '@footyTrackr/base-tools/entity/baseDb.entity';
import {Fixture} from "../fixture/fixture";
import {Player} from "../player/player";

@Entity('goal')
export class Goal extends BaseDbEntity {
    @Column()
    minute!: number;

    @Column()
    scorerId!: number;

    @ManyToOne(() => Player, player => player.goals)
    scorer!: Player;

    @Column()
    assistantId?: number;

    @ManyToOne(() => Player, player => player.assists, { nullable: true })
    assistant?: Player;

    @Column()
    fixtureId!: number;

    @ManyToOne(() => Fixture, fixture => fixture.goals)
    fixture!: Fixture;

    @Column()
    clubId!: number;

    @Column()
    ownGoal?: boolean;

    @Column()
    penalty?: boolean;
}

export class CreateGoalDto extends PickType(Goal, ["fixtureId", "scorerId", "assistantId", "clubId", "minute", "ownGoal", "penalty"] as const) {}
