import { PickType } from '@nestjs/swagger';
import {Column, Entity, ManyToOne, OneToOne} from 'typeorm';
import { BaseDbEntity } from '@iWatchFootball/base-tools/entity/baseDb.entity';
import {Competition} from "../competition/competition";

@Entity('trophy')
export class Trophy extends BaseDbEntity {
    @Column()
    name!: string;

    @Column({ nullable: true })
    description?: string;  // Optional: Description of the trophy

    @Column({ nullable: true })
    yearIntroduced?: number; // Year the trophy was first awarded

    @ManyToOne(() => Competition, competition => competition.trophies)
    competition!: Competition;
}

export class CreateTrophyDto extends PickType(Trophy, ['name', 'description', 'yearIntroduced'] as const) {}