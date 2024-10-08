import {PickType} from "@nestjs/swagger";
import {Column, Entity} from "typeorm";
import {BaseDbEntity} from "@iWatchFootball/base-tools/entity/baseDb.entity";

@Entity('position')
export class Position extends BaseDbEntity {

    @Column()
    name!: string; // e.g., Forward, Midfielder

    @Column()
    abbreviation!: string; // e.g., FW, MF
}

export class CreatePositionDTO extends PickType(Position, ["name", "abbreviation"] as const) {}