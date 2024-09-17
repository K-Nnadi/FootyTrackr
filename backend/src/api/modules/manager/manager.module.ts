import {Injectable, Module} from '@nestjs/common';
import {InjectRepository, TypeOrmModule} from "@nestjs/typeorm";
import {CreateManagerDto, Manager} from "./manager";
import {CrudController} from "@iWatchFootball/base-tools/crud/crud.controller";
import {AuthedController} from "@iWatchFootball/base-tools/decorators/controller.decorator";
import {CrudRepoAdapter} from "@iWatchFootball/base-tools/crud/crud.repo.adapter";
import {Repository} from "typeorm";


@Injectable()
export class ManagerService extends CrudRepoAdapter<Manager, CreateManagerDto> {
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
  providers: [ManagerService],
  exports: [ManagerService]
})


export class ManagerModule {}
