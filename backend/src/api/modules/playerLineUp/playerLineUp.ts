import {PickType} from '@nestjs/swagger';
import {Column, Entity, ManyToOne, OneToMany} from 'typeorm';
import {BaseDbEntity} from '@iWatchFootball/base-tools/entity/baseDb.entity';
import {LineUp} from '../lineUp/lineUp';
import {Player} from '../player/player';
import {Substitution} from "../substitution/substitution";

@Entity('playerLineup')
export class PlayerLineUp extends BaseDbEntity {
    @ManyToOne(() => LineUp, lineup => lineup.playerLineups)
    lineup!: LineUp;

    @Column()
    lineupId!: number;

    @Column()
    playerId!: number;

    @ManyToOne(() => Player)
    player!: Player;

    @Column()
    isStarting!: boolean;

    @Column({ nullable: true })
    positionId?: number;

    @OneToMany(() => Substitution, substitution => substitution.playerLineup)
    substitutions!: Substitution[];

    @Column({ default: false })
    isCaptain!: boolean;
}


export class CreatePlayerLineUpDTO extends PickType(PlayerLineUp, [ "lineupId" , "playerId" , "isCaptain" , "positionId", "isStarting"] as const) {}
