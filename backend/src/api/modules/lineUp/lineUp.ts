import { PickType } from '@nestjs/swagger';
import {Column, Entity, ManyToOne, OneToMany} from 'typeorm';
import { BaseDbEntity } from '@footyTrackr/base-tools/entity/baseDb.entity';
import {Fixture} from "../fixture/fixture";
import {Club} from "../club/club";
import {Manager} from "../manager/manager";
import {Country} from "../country/country";
import {HomeOrAway} from "../../enums/fixture.enum";
import {PlayerLineUp} from "../playerLineUp/playerLineUp";

@Entity('lineUp')
export class LineUp extends BaseDbEntity {

    @Column()
    fixtureId!: number;

    @ManyToOne(() => Fixture, fixture => fixture.lineUps)
    fixture!: Fixture;

    @Column()
    clubId?: number;

    @ManyToOne(() => Club)
    club?: Club;

    @Column()
    countryId?: number;

    @ManyToOne(() => Country)
    country?: Country;

    @Column()
    managerId!: number;

    @ManyToOne(() => Manager)
    manager?: Manager;

    @Column({ type: 'enum', enum: HomeOrAway, default: 'home' })
    teamType!: HomeOrAway;

    @OneToMany(() => PlayerLineUp, playerLineUp => playerLineUp.lineup)
    playerLineups!: PlayerLineUp[];

    @Column()
    formation?: string; // e.g., 4-4-2, 3-5-2
}

export class CreateLineUpDto extends PickType(LineUp, ["fixtureId", "clubId", "managerId", "formation", "teamType"] as const) {}
