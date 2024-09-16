import { PickType } from '@nestjs/swagger';
import {Column, Entity, ManyToOne} from 'typeorm';
import { BaseDbEntity } from '@iWatchFootball/base-tools/entity/baseDb.entity';
import {Player} from "../player/player";
import {PlayerLineUp} from "../playerLineUp/playerLineUp";
import {Team} from "../team/team";

@Entity('substitution')
export class Substitution extends BaseDbEntity {
    @ManyToOne(() => PlayerLineUp, playerLineup => playerLineup.substitutions)
    playerLineup!: PlayerLineUp;

    @Column()
    fixtureId!: number;

    @Column()
    teamId?: number;

    @ManyToOne(() => Team, { nullable: true })
    team?: Team;

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

export class CreateSubstitutionDto extends PickType(Substitution, ["fixtureId", "teamId", "playerInId", "playerOutId", "minute"] as const) {}
