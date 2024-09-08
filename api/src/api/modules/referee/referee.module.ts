import {Injectable, Module} from '@nestjs/common';
import {InjectRepository, TypeOrmModule} from "@nestjs/typeorm";
import {CreateRefereeDto, Referee} from "./referee";
import {CrudController} from "@footyTrackr/base-tools/crud/crud.controller";
import {AuthedController} from "@footyTrackr/base-tools/decorators/controller.decorator";
import {CrudRepoAdapter} from "@footyTrackr/base-tools/crud/crud.repo.adapter";
import {Repository} from "typeorm";


@Injectable()
class RefereeService extends CrudRepoAdapter<Referee, CreateRefereeDto> {
    constructor(@InjectRepository(Referee) private entityRepo: Repository<Referee>) {
        super(entityRepo);
    }
}

@AuthedController('referee')
export class RefereeController extends CrudController<Referee, CreateRefereeDto>(Referee, CreateRefereeDto) {
    constructor(private service: RefereeService) {
        super(service)
    }
}

@Module({
    imports: [TypeOrmModule.forFeature([Referee])],
    controllers: [RefereeController],
    providers: [RefereeService]
})


export class RefereeModule {
}
