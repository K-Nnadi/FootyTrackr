import {Controller} from '@nestjs/common';
import {User, CreateUserDto} from "./entities/user";
import {UserService} from "./user.service";
import {CrudController} from "@fl/base-tools/crud/crud.controller";


@Controller('user')
export class UserController extends CrudController<User, CreateUserDto>(User, CreateUserDto){
  constructor(private service: UserService) {
    super(service)
  }
}
