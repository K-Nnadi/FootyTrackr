import {PickType} from "@nestjs/swagger";
import {Entity} from "typeorm";
import {BaseDbEntity} from "@iWatchFootball/base-tools/entity/baseDb.entity";
import {EntityColumn} from "@iWatchFootball/base-tools/decorators/entityColumn.decorator";
import {UserType} from "../../enums/user.enum";


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
