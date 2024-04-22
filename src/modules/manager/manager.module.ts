import {Controller, Module} from '@nestjs/common';
import {ManagerService} from './manager.service';
import {TypeOrmModule} from "@nestjs/typeorm";
import {CreateManagerDto, Manager} from "./manager";
import {CrudController} from "@fl/base-tools/crud/crud.controller";

@Controller('manager')
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
