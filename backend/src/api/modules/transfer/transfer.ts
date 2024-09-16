import {PickType} from "@nestjs/swagger";
import {Column, Entity, ManyToOne, OneToMany} from 'typeorm';
import {BaseDbEntity} from "@iWatchFootball/base-tools/entity/baseDb.entity";
import {Player} from "../player/player";
import {Team} from "../team/team";


@Entity('transfer')
export class Transfer extends BaseDbEntity {

    @Column()
    playerId!: number

    @ManyToOne(() => Player, player => player.transfers)
    player!: Player

    @Column()
    sourceTeamId!: number

    @ManyToOne(() => Team)
    sourceTeam!: Team;  // Country player is transferring from

    @Column()
    destinationTeamId!: number

    @ManyToOne(() => Team)
    destinationTeam!: Team;

    @Column()
    transferFee!: number

    @Column()
    date!: Date

    @Column()
    isLoan?: boolean
}

export class CreateTransferDto extends PickType(Transfer, ["playerId", "sourceTeamId", "destinationTeamId", "transferFee", "date", "isLoan"] as const) {
}