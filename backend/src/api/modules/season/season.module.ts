import {Injectable, Module} from '@nestjs/common';
import {InjectRepository, TypeOrmModule} from "@nestjs/typeorm";
import {CreateSeasonDto, Season} from "./season";
import {CrudController} from "@iWatchFootball/base-tools/crud/crud.controller";
import {AuthedController} from "@iWatchFootball/base-tools/decorators/controller.decorator";
import {CrudRepoAdapter} from "@iWatchFootball/base-tools/crud/crud.repo.adapter";
import {Repository} from "typeorm";


@Injectable()
class SeasonService extends CrudRepoAdapter<Season, CreateSeasonDto> {
    constructor(@InjectRepository(Season) private entityRepo: Repository<Season>) {
        super(entityRepo);
    }
}

@AuthedController('season')
export class SeasonController extends CrudController<Season, CreateSeasonDto>(Season, CreateSeasonDto) {
    constructor(private service: SeasonService) {
        super(service)
    }
}

@Module({
    imports: [TypeOrmModule.forFeature([Season])],
    controllers: [SeasonController],
    providers: [SeasonService]
})


export class SeasonModule {
}
