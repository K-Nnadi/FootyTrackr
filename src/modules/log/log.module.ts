import {Controller, Module} from '@nestjs/common';
import {LogService} from './log.service';
import {TypeOrmModule} from "@nestjs/typeorm";
import {CreateLogDto, Log} from "./log";
import {CrudController} from "@fl/base-tools/crud/crud.controller";

@Controller('log')
export class LogController extends CrudController<Log, CreateLogDto>(Log, CreateLogDto){
    constructor(private service: LogService) {
        super(service)
    }
}

@Module({
    imports: [TypeOrmModule.forFeature([Log])],
    controllers: [LogController],
    providers: [LogService]
})
export class LogModule {
}
