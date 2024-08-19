import {Injectable, Module} from '@nestjs/common';
import {InjectRepository, TypeOrmModule} from "@nestjs/typeorm";
import {CreateLogDto, Log} from "./log";
import {CrudController} from "@footyTrackr/base-tools/crud/crud.controller";
import {AuthedController} from "@footyTrackr/base-tools/decorators/controller.decorator";
import {CrudRepoAdapter} from "@footyTrackr/base-tools/crud/crud.repo.adapter";
import {Repository} from "typeorm";


@Injectable()
class LogService extends CrudRepoAdapter<Log, CreateLogDto> {
    constructor(@InjectRepository(Log) private entityRepo: Repository<Log>) {
        super(entityRepo);
    }
}

@AuthedController('log')
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


export class LogModule {}
