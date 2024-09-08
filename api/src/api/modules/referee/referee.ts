import { PickType } from '@nestjs/swagger';
import { Column, Entity } from 'typeorm';
import { BaseDbEntity } from '@footyTrackr/base-tools/entity/baseDb.entity';

@Entity('referee')
export class Referee extends BaseDbEntity {

    @Column()
    name!: string;

    @Column()
    nationality!: string;
}

export class CreateRefereeDto extends PickType(Referee, ["name", "nationality"] as const) {}
