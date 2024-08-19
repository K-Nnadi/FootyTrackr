import {PickType} from "@nestjs/swagger";
import {Column, Entity} from 'typeorm';
import {BaseDbEntity} from "@footyTrackr/base-tools/entity/baseDb.entity";


@Entity('club')
export class Club extends BaseDbEntity {

    @Column()
    name!: string

    @Column()
    nickname!: string

    @Column()
    founded!: Date

    @Column()
    manager!: string

    @Column()
    league!: string

    @Column()
    website!: string
}

export class CreateClubDto extends PickType(Club, ["name", "nickname", "founded", "manager", "league", "website"] as const) {
}