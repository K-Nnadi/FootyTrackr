import { PickType } from '@nestjs/swagger';
import { Column, Entity } from 'typeorm';
import { BaseDbEntity } from '@footyTrackr/base-tools/entity/baseDb.entity';

@Entity('substitution')
export class Substitution extends BaseDbEntity {

    @Column()
    fixtureId!: number;

    @Column()
    clubId!: number;

    @Column()
    playerInId!: number;

    @Column()
    playerOutId!: number;

    @Column()
    minute!: number;
}

export class CreateSubstitutionDto extends PickType(Substitution, ["fixtureId", "clubId", "playerInId", "playerOutId", "minute"] as const) {}
