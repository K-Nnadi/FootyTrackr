import {Controller} from '@nestjs/common';
import {Log, CreateLogDto} from "./entities/log";
import {LogService} from "./log.service";
import {CrudController} from "../../shared/crud/crud.controller";

@Controller('log')
export class LogController extends CrudController<Log, CreateLogDto>(Log, CreateLogDto){
  constructor(private service: LogService) {
    super(service)
  }
}
