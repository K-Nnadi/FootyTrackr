import {Injectable, Module} from '@nestjs/common';
import {InjectRepository, TypeOrmModule} from "@nestjs/typeorm";
import {CreateManagerDto, Manager} from "./manager";
import {CrudController} from "@footyTrackr/base-tools/crud/crud.controller";
import {AuthedController} from "@footyTrackr/base-tools/decorators/controller.decorator";
import {CrudRepoAdapter} from "@footyTrackr/base-tools/crud/crud.repo.adapter";
import {Repository} from "typeorm";


@Injectable()
class ManagerService extends CrudRepoAdapter<Manager, CreateManagerDto> {
  constructor(@InjectRepository(Manager) private entityRepo: Repository<Manager>) {
    super(entityRepo);
  }
}

@AuthedController('manager')
export class ManagerController extends CrudController<Manager, CreateManagerDto>(Manager, CreateManagerDto){
  constructor(private service: ManagerService) {
    super(service)
  }
}

@Module({
  imports: [TypeOrmModule.forFeature([Manager])],
  controllers: [ManagerController],
  providers: [ManagerService]
})


export class ManagerModule {}
