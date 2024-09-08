import {PickType} from "@nestjs/swagger";
import {Column, Entity, ManyToOne, OneToMany} from 'typeorm';
import {BaseDbEntity} from "@footyTrackr/base-tools/entity/baseDb.entity";
import {Player} from "../player/player";
import {Club} from "../club/club";


@Entity('transfer')
export class Transfer extends BaseDbEntity {

    @Column()
    playerId!: number

    @ManyToOne(() => Player, player => player.transfers)
    player!: Player

    @Column()
    sourceClubId!: number

    @ManyToOne(() => Club)
    sourceClub!: Club;  // Country player is transferring from

    @Column()
    destinationClubId!: number

    @ManyToOne(() => Club)
    destinationClub!: Club;

    @Column()
    transferFee!: number

    @Column()
    date!: Date

    @Column()
    isLoan?: boolean
}

export class CreateTransferDto extends PickType(Transfer, ["playerId", "sourceClubId", "destinationClubId", "transferFee", "date", "isLoan"] as const) {
}