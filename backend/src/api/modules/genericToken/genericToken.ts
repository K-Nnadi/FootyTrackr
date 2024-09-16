import {PickType} from "@nestjs/swagger";
import {Column, Entity} from "typeorm";
import {BaseDbEntity} from "@iWatchFootball/base-tools/entity/baseDb.entity";


@Entity('genericToken')

export class GenericToken extends BaseDbEntity {
    @Column()
    token!: string

    @Column()
    type!: string

    @Column()
    expiry!: string

    @Column()
    userEmail?: string

    @Column()
    userId!: number

}

export class CreateGenericTokenDto extends PickType(GenericToken, ["token", "type", "expiry", "userEmail", "userId"] as const) {
}