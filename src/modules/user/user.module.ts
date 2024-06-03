import {Controller, Module} from '@nestjs/common';
import {UserService} from './user.service';
import {TypeOrmModule} from "@nestjs/typeorm";
import {CreateUserDto, User} from "./user";
import {CrudController} from "@fl/base-tools/crud/crud.controller";

@Controller('user')
export class UserController extends CrudController<User, CreateUserDto>(User, CreateUserDto){
  constructor(private service: UserService) {
    super(service)
  }
}

@Module({
  imports: [TypeOrmModule.forFeature([User])],
  controllers: [UserController],
  providers: [UserService]
})


export class UserModule {}
