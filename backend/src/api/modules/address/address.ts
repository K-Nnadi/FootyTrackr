import {PickType} from "@nestjs/swagger";
import {Column, Entity, OneToOne} from 'typeorm';
import {BaseDbEntity} from "@iWatchFootball/base-tools/entity/baseDb.entity";
import {Stadium} from "../stadium/stadium";


@Entity('address')
export class Address extends BaseDbEntity {

    @Column()
    address1?: string

    @Column()
    address2?: string

    @Column()
    townOrCity?: string

    @Column()
    postcode?: string

    @Column()
    country?: string

    @Column()
    location?: string

    @Column()
    stadiumId?: number

    @OneToOne(() => Stadium, stadium => stadium.address)
    stadium?: Stadium

}

export class CreateAddressDTO extends PickType(Address, ["address1", "address2", "townOrCity", "postcode", "location"] as const) {
}