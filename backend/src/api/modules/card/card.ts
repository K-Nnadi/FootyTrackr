import { PickType } from '@nestjs/swagger';
import { Column, Entity } from 'typeorm';
import { BaseDbEntity } from '@iWatchFootball/base-tools/entity/baseDb.entity';
import {CardType} from "../../enums/card.enum";

@Entity('card')
export class Card extends BaseDbEntity {

    @Column()
    fixtureId!: number;

    @Column()
    playerId!: number;

    @Column({ type: 'enum', enum: CardType })
    type!: CardType; // Enum for yellow or red card

    @Column()
    minute!: number;
}

export class CreateCardDTO extends PickType(Card, ["fixtureId", "playerId", "type", "minute"] as const) {}
