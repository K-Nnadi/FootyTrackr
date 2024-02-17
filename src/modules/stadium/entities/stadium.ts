import {PickType} from "@nestjs/swagger";
import {Column, Entity} from "typeorm";
import {BaseDbEntity} from "@fl/base-tools/entity/baseDb.entity";


@Entity('stadium')

export class Stadium extends BaseDbEntity{

    @Column()
    name!: string

    @Column()
    opened!: string

    @Column()
    teams!: number

    @Column()
    address1!: string

    @Column()
    address2!: string

    @Column()
    townOrCity!: string

    @Column()
    postcode!: string

    @Column()
    location!:string
}

export class CreateStadiumDto extends PickType(Stadium, ["name", "opened", "teams", "address1", "address2", "townOrCity", "postcode", "location"] as const){}