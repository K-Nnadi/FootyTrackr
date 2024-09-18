import {PickType} from '@nestjs/swagger';
import {Column, Entity, ManyToOne, OneToMany} from 'typeorm';
import {BaseDbEntity} from '@iWatchFootball/base-tools/entity/baseDb.entity';
import {Fixture} from "../fixture/fixture";
import {Team} from "../team/team";
import {Manager} from "../manager/manager";
import {HomeOrAway} from "../../enums/fixture.enum";
import {PlayerLineUp} from "../playerLineUp/playerLineUp";

@Entity('lineUp')
export class LineUp extends BaseDbEntity {

    @Column()
    fixtureId!: number;

    @ManyToOne(() => Fixture, fixture => fixture.lineUps)
    fixture!: Fixture;

    @Column()
    teamId!: number;

    @ManyToOne(() => Team)
    team!: Team;

    @Column()
    managerId!: number;

    @ManyToOne(() => Manager)
    manager?: Manager;

    @Column({ type: 'enum', enum: HomeOrAway, default: HomeOrAway.HOME })
    teamType!: HomeOrAway;

    @OneToMany(() => PlayerLineUp, playerLineUp => playerLineUp.lineup)
    playerLineups!: PlayerLineUp[];

    @Column()
    formation?: string; // e.g., 4-4-2, 3-5-2
}

export class CreateLineUpDTO extends PickType(LineUp, ["fixtureId", "teamId", "managerId", "formation", "teamType"] as const) {}
