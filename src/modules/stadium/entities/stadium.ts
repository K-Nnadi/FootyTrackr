import {PickType} from "@nestjs/swagger";
import {Entity} from "typeorm";

@Entity('stadium')

export class Stadium {

    name!: string
    opened!: string
    teams!: number[]
    address1!: string
    address2!: string
    townOrCity!: string
    postcode!: string
    location!:string
}

export class CreateStadiumDto extends PickType(Stadium, ["name", "opened", "teams", "address1", "address2", "townOrCity", "postcode", "location"] as const){}