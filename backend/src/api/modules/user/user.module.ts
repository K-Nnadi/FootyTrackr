import {Injectable, Module} from '@nestjs/common';
import {InjectRepository, TypeOrmModule} from "@nestjs/typeorm";
import {CreateUserDto, User} from "./user";
import {CrudController} from "@iWatchFootball/base-tools/crud/crud.controller";
import {AuthedController} from "@iWatchFootball/base-tools/decorators/controller.decorator";
import {CrudRepoAdapter} from "@iWatchFootball/base-tools/crud/crud.repo.adapter";
import {Repository} from "typeorm";


@Injectable()
export class UserService extends CrudRepoAdapter<User, CreateUserDto> {
  constructor(@InjectRepository(User) private entityRepo: Repository<User>) {
    super(entityRepo);
  }
}

@AuthedController('user')
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
