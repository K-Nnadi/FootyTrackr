import { PickType } from '@nestjs/swagger';
import { Column, Entity, OneToMany } from 'typeorm';
import { BaseDbEntity } from '@iWatchFootball/base-tools/entity/baseDb.entity';
import {FixtureReferee} from "../fixtureReferee/fixtureReferee";

@Entity('referee')
export class Referee extends BaseDbEntity {

    @Column()
    name!: string;

    @Column()
    nationality!: string;

    @OneToMany(() => FixtureReferee, fixtureReferee => fixtureReferee.referee)
    fixtures!: FixtureReferee[];
}

export class CreateRefereeDTO extends PickType(Referee, ["name", "nationality"] as const) {}
