import {PickType} from "@nestjs/swagger";
import {Column, Entity, ManyToMany, OneToMany} from "typeorm";
import {BaseDbEntity} from "@iWatchFootball/base-tools/entity/baseDb.entity";
import {Goal} from "../goal/goal";
import {Transfer} from "../transfer/transfer";
import {Team} from "../team/team";


@Entity('player')

export class Player extends BaseDbEntity{

    @Column()
    name!: string

    @Column()
    nickname!: string

    @Column()
    dateOfBirth!: Date

    @Column()
    nationality!: string

    @Column()
    positionId!: number

    @Column("int", { array: true })
    teamIds?: number[]

    @ManyToMany(() => Team, team => team.players)
    teams!: Team[]

    @Column()
    kitNumber!: number

    @Column({ nullable: true })
    height?: number;

    @Column({ nullable: true })
    weight?: number;

    @Column()
    photoUrl?: string

    @OneToMany(() => Goal, goal => goal.scorer)
    goals!: Goal[];

    @OneToMany(() => Goal, goal => goal.assistant)
    assists!: Goal[];

    @OneToMany(() => Goal, goal => goal.ownGoal)
    ownGoals!: Goal[];

    @OneToMany(() => Transfer, transfer => transfer.player)
    transfers!: Transfer[];

}



export class CreatePlayerDto extends PickType(Player, ["name", "nickname", "dateOfBirth", "nationality", "positionId", "teamIds", "height", "weight", "kitNumber", "photoUrl" ] as const) {}