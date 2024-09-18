import { PickType } from '@nestjs/swagger';
import { Column, Entity } from 'typeorm';
import { BaseDbEntity } from '@iWatchFootball/base-tools/entity/baseDb.entity';

@Entity('injury')
export class Injury extends BaseDbEntity {

    @Column()
    playerId!: number;

    @Column()
    injuryType!: string; // e.g., hamstring, ACL tear

    @Column()
    startDate!: Date;

    @Column()
    endDate!: Date;

    @Column()
    status!: string; // e.g., injured, recovered
}

export class CreateInjuryDTO extends PickType(Injury, ["playerId", "injuryType", "startDate", "endDate", "status"] as const) {}
