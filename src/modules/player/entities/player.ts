import {PickType} from "@nestjs/swagger";
import {Entity} from "typeorm";

@Entity('player')

export class Player {

    firstName!: string
    lastName!: string
    nationality!: string
    position!: string
    currentClub!: string
}

export class CreatePlayerDto extends PickType(Player, ["firstName", "lastName", "nationality", "position", "currentClub"] as const) {}