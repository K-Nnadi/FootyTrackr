import {PickType} from "@nestjs/swagger";
import {Column, Entity} from "typeorm";
import {BaseDbEntity} from "@footyTrackr/base-tools/entity/baseDb.entity";


@Entity('log')

export class Log extends BaseDbEntity{

    @Column()
    home!: string

    @Column()
    away!: string

    @Column()
    stadium!: string

    @Column()
    date!: Date

    @Column()
    competition!: string
}
export class CreateLogDto extends PickType(Log, ["home", "away", "stadium", "date", "competition"] as const) {}