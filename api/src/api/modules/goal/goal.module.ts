import {Injectable, Module} from '@nestjs/common';
import {InjectRepository, TypeOrmModule} from "@nestjs/typeorm";
import {CreateGoalDto, Goal} from "./goal";
import {CrudController} from "@footyTrackr/base-tools/crud/crud.controller";
import {AuthedController} from "@footyTrackr/base-tools/decorators/controller.decorator";
import {CrudRepoAdapter} from "@footyTrackr/base-tools/crud/crud.repo.adapter";
import {Repository} from "typeorm";


@Injectable()
class GoalService extends CrudRepoAdapter<Goal, CreateGoalDto> {
    constructor(@InjectRepository(Goal) private entityRepo: Repository<Goal>) {
        super(entityRepo);
    }
}

@AuthedController('goal')
export class GoalController extends CrudController<Goal, CreateGoalDto>(Goal, CreateGoalDto) {
    constructor(private service: GoalService) {
        super(service)
    }
}

@Module({
    imports: [TypeOrmModule.forFeature([Goal])],
    controllers: [GoalController],
    providers: [GoalService]
})


export class GoalModule {
}
