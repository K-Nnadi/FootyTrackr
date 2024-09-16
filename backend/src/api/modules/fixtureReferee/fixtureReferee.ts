import {PickType} from "@nestjs/swagger";
import {Column, Entity, ManyToOne} from 'typeorm';
import {BaseDbEntity} from "@iWatchFootball/base-tools/entity/baseDb.entity";
import {RefereeRole} from "../../enums/referee.enum";
import {Fixture} from "../fixture/fixture";
import {Referee} from "../referee/referee";

@Entity('fixtureReferee')
export class FixtureReferee extends BaseDbEntity {

    @Column()
    fixtureId!: number;

    @ManyToOne(() => Fixture, fixture => fixture.referees)
    fixture!: Fixture;

    @Column()
    refereeId!: number;

    @ManyToOne(() => Referee, referee => referee.fixtures)
    referee!: Referee;


    @Column({
        type: 'enum',
        enum: RefereeRole,
        default: RefereeRole.MAIN
    })
    role!: RefereeRole;
}

export class CreateFixtureRefereeDto extends PickType(FixtureReferee, ["fixtureId", "refereeId", "role"] as const) {}
