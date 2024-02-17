import {PickType} from "@nestjs/swagger";
import {Column, Entity} from "typeorm";
import {BaseDbEntity} from "@fl/base-tools/entity/baseDb.entity";


@Entity('user')

export class User extends BaseDbEntity{
    @Column()
    firstName!: string

    @Column()
    lastName!: string

    @Column()
    userName!: string

    @Column()
    email!: string

    @Column()
    password!: string

    @Column()
    type!:string
}

export class CreateUserDto extends PickType(User, ["firstName", "lastName", "userName", "email", "type"] as const){}