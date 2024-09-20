import {PickType} from "@nestjs/swagger";
import {Column, Entity, ManyToOne} from "typeorm";
import {BaseDbEntity} from "@iWatchFootball/base-tools/entity/baseDb.entity";
import {User} from "../user/user";
import {Fixture} from "../fixture/fixture";


@Entity('log')

export class Log extends BaseDbEntity {

    @Column()
    userId!: number;

    @ManyToOne(() => User, user => user.logs)
    user!: User;

    @Column()
    fixtureId!: number;

    @ManyToOne(() => Fixture, fixture => fixture.logs)
    fixture!: Fixture;

    @Column({nullable: true})
    ticketNumber?: string;

    @Column({default: false})
    isVerified!: boolean;

    @Column({nullable: true})
    notes?: string;

}

export class CreateLogDTO extends PickType(Log, ["userId", "fixtureId", "ticketNumber", "notes", "isVerified"] as const) {
}