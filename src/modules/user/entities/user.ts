import {PickType} from "@nestjs/swagger";
import {Entity} from "typeorm";

@Entity('user')

export class User {
    firstName!: string
    lastName!: string
    userName!: string
    email!: string
    password!: string
    type!:string
}

export class CreateUserDto extends PickType(User, ["firstName", "lastName", "userName", "email", "type"] as const){}