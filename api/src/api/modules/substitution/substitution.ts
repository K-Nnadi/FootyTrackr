import { PickType } from '@nestjs/swagger';
import {Column, Entity, ManyToOne} from 'typeorm';
import { BaseDbEntity } from '@footyTrackr/base-tools/entity/baseDb.entity';
import {Player} from "../player/player";
import {PlayerLineUp} from "../playerLineUp/playerLineUp";
import {Club} from "../club/club";

@Entity('substitution')
export class Substitution extends BaseDbEntity {
    @ManyToOne(() => PlayerLineUp, playerLineup => playerLineup.substitutions)
    playerLineup!: PlayerLineUp;

    @Column()
    fixtureId!: number;

    @Column()
    clubId?: number;

    @ManyToOne(() => Club, { nullable: true })
    club?: Club;

    @Column()
    countryId?: number;

    @Column()
    playerInId!: number;

    @ManyToOne(() => Player)
    playerIn!: Player;

    @Column()
    playerOutId!: number;

    @ManyToOne(() => Player)
    playerOut!: Player;

    @Column()
    minute!: number;
}

export class CreateSubstitutionDto extends PickType(Substitution, ["fixtureId", "clubId", "playerInId", "playerOutId", "minute"] as const) {}
