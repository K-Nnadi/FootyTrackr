import {Injectable, Module} from '@nestjs/common';
import {InjectRepository, TypeOrmModule} from "@nestjs/typeorm";
import {CreateGoalDto, Goal} from "./goal";
import {CrudController} from "@iWatchFootball/base-tools/crud/crud.controller";
import {AuthedController} from "@iWatchFootball/base-tools/decorators/controller.decorator";
import {CrudRepoAdapter} from "@iWatchFootball/base-tools/crud/crud.repo.adapter";
import {Repository} from "typeorm";


@Injectable()
export class GoalService extends CrudRepoAdapter<Goal, CreateGoalDto> {
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
    providers: [GoalService],
    exports: [GoalService]
})


export class GoalModule {
}
