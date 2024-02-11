import {PickType} from "@nestjs/swagger";
import {Entity} from "typeorm";

@Entity('log')

export class Log {
    home!: string
    away!: string
    stadium!: string
    date!: Date
    competition!: string
}
export class CreateLogDto extends PickType(Log, ["home", "away", "stadium", "date", "competition"] as const) {}