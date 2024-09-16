import {Injectable, Module} from '@nestjs/common';
import {InjectRepository, TypeOrmModule} from "@nestjs/typeorm";
import {CreateCompetitionDto, Competition} from "./competition";
import {CrudController} from "@iWatchFootball/base-tools/crud/crud.controller";
import {AuthedController} from "@iWatchFootball/base-tools/decorators/controller.decorator";
import {CrudRepoAdapter} from "@iWatchFootball/base-tools/crud/crud.repo.adapter";
import {Repository} from "typeorm";


@Injectable()
class CompetitionService extends CrudRepoAdapter<Competition, CreateCompetitionDto> {
  constructor(@InjectRepository(Competition) private entityRepo: Repository<Competition>) {
    super(entityRepo);
  }
}

@AuthedController('competition')
export class CompetitionController extends CrudController<Competition, CreateCompetitionDto>(Competition, CreateCompetitionDto){
  constructor(private service: CompetitionService) {
    super(service)
  }
}

@Module({
  imports: [TypeOrmModule.forFeature([Competition])],
  controllers: [CompetitionController],
  providers: [CompetitionService]
})


export class CompetitionModule {}
