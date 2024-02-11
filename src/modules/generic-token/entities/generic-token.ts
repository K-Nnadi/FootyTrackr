import {PickType} from "@nestjs/swagger";
import {Entity} from "typeorm";

@Entity('genericToken')

export class GenericToken {
    token!: string
    type!:string
    expiry!: string
    userEmail?:string
    userId: string
}

export class CreateGenericTokenDto extends PickType(GenericToken, ["token", "type", "expiry", "userEmail", "userId"] as const) {}