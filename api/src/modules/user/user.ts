import {PickType} from "@nestjs/swagger";
import {Column, Entity} from "typeorm";
import {BaseDbEntity} from "@footyTrackr/base-tools/entity/baseDb.entity";
import {EntityColumn} from "@footyTrackr/base-tools/decorators/entityColumn.decorator";


enum UserType {
    'ADMIN' = "ADMIN",
    "USER" = "USER"
}

@Entity('user')

export class User extends BaseDbEntity {
    @EntityColumn()
    firstName!: string

    @EntityColumn()
    lastName!: string

    @EntityColumn()
    userName!: string

    @EntityColumn({
        db: {unique: true},
        api: {format: 'email'}
    })
    email!: string

    @EntityColumn({api: {minLength: 8, maxLength: 32}})
    password!: string

    @EntityColumn({
        db: {default: UserType.USER},
        api: {enum: {user: UserType.USER, admin: UserType.ADMIN}}
    })
    type!: UserType
}

export class CreateUserDto extends PickType(User, ["firstName", "lastName", "userName", "email", "type"] as const) {
}
