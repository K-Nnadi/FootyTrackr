import {PickType} from "@nestjs/swagger";
import {Entity} from 'typeorm';

@Entity('club')
export class Club {
    name!: string
    nickname!: string
    founded!: Date
    manager!: string
    league!: string
    website!: string
}
export class CreateClubDto extends PickType(Club, ["name", "nickname", "founded", "manager", "league", "website"] as const) {}