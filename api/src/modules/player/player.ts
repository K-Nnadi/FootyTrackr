import {PickType} from "@nestjs/swagger";
import {Column, Entity} from "typeorm";
import {BaseDbEntity} from "@footyTrackr/base-tools/entity/baseDb.entity";


@Entity('player')

export class Player extends BaseDbEntity{

    @Column()
    name!: string

    @Column()
    nickname!: string

    @Column()
    dateOfBirth!: Date

    @Column()
    nationality!: number

    @Column()
    position!: string

    @Column()
    clubId!: number
}



export class CreatePlayerDto extends PickType(Player, ["name", "nickname", "dateOfBirth", "nationality", "position", "clubId"] as const) {}