import {PickType} from "@nestjs/swagger";
import {Column, Entity} from "typeorm";
import {BaseDbEntity} from "@fl/base-tools/entity/baseDb.entity";


@Entity('player')

export class Player extends BaseDbEntity{

    @Column()
    firstName!: string

    @Column()
    lastName!: string

    @Column()
    nationality!: string

    @Column()
    position!: string

    @Column()
    currentClub!: string
}

export class CreatePlayerDto extends PickType(Player, ["firstName", "lastName", "nationality", "position", "currentClub"] as const) {}