import {Injectable, Module} from '@nestjs/common';
import {InjectRepository, TypeOrmModule} from "@nestjs/typeorm";
import {CreatePositionDto, Position} from "./position";
import {CrudController} from "@iWatchFootball/base-tools/crud/crud.controller";
import {AuthedController} from "@iWatchFootball/base-tools/decorators/controller.decorator";
import {CrudRepoAdapter} from "@iWatchFootball/base-tools/crud/crud.repo.adapter";
import {Repository} from "typeorm";


@Injectable()
class PositionService extends CrudRepoAdapter<Position, CreatePositionDto> {
    constructor(@InjectRepository(Position) private entityRepo: Repository<Position>) {
        super(entityRepo);
    }
}

@AuthedController('position')
export class PositionController extends CrudController<Position, CreatePositionDto>(Position, CreatePositionDto) {
    constructor(private service: PositionService) {
        super(service)
    }
}

@Module({
    imports: [TypeOrmModule.forFeature([Position])],
    controllers: [PositionController],
    providers: [PositionService]
})


export class PositionModule {
}
