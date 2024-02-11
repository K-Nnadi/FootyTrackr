import {PickType} from "@nestjs/swagger";
import {Entity} from "typeorm";

@Entity('manager')

export class Manager {

    firstName!: string
    lastName!: string
    nationality!: string
    currentClub!: string
}


export class CreateManagerDto extends PickType(Manager, ["firstName", "lastName", "nationality", "currentClub"] as const) {}