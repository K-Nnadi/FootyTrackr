import {PickType} from '@nestjs/swagger';
import {Column, Entity, ManyToOne} from 'typeorm';
import {BaseDbEntity} from '@footyTrackr/base-tools/entity/baseDb.entity';
import {LineUp} from '../lineUp/lineUp';
import {Player} from '../player/player';
import {StartingOrSubstitute} from "../../enums/substitution.enum";

@Entity('playerLineup')
export class PlayerLineUp extends BaseDbEntity {
    @ManyToOne(() => LineUp, lineup => lineup.playerLineups)
    lineup!: LineUp;

    @Column()
    lineupId!: number;

    @ManyToOne(() => Player)
    player!: Player;

    @Column()
    playerId!: number;

    @Column({ type: 'enum', enum: StartingOrSubstitute, default: 'starting' })
    role!: StartingOrSubstitute;

    @Column({ nullable: true })
    positionId?: number;

    @Column({ nullable: true })
    substituteId?: number;


    @Column({ default: false })
    isCaptain!: boolean;
}


export class CreatePlayerLineUpDto extends PickType(PlayerLineUp, ["fixtureId", "clubId", "managerId", "playerIds", "formation", "isCaptain"] as const) {}
