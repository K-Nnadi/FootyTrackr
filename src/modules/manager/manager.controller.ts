import {Controller} from '@nestjs/common';
import {Manager, CreateManagerDto} from "./entities/manager";
import {ManagerService} from "./manager.service";
import {CrudController} from "@fl/base-tools/crud/crud.controller";

@Controller('manager')
export class ManagerController extends CrudController<Manager, CreateManagerDto>(Manager, CreateManagerDto){
  constructor(private service: ManagerService) {
    super(service)
  }
}
