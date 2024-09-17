import {Injectable, Module} from '@nestjs/common';
import {InjectRepository, TypeOrmModule} from "@nestjs/typeorm";
import {CreateTeamCompetitionSeasonDto, TeamCompetitionSeason} from "./teamCompetitionSeason";
import {CrudController} from "@iWatchFootball/base-tools/crud/crud.controller";
import {AuthedController} from "@iWatchFootball/base-tools/decorators/controller.decorator";
import {CrudRepoAdapter} from "@iWatchFootball/base-tools/crud/crud.repo.adapter";
import {Repository} from "typeorm";


@Injectable()
class TeamCompetitionSeasonservice extends CrudRepoAdapter<TeamCompetitionSeason, CreateTeamCompetitionSeasonDto> {
  constructor(@InjectRepository(TeamCompetitionSeason) private entityRepo: Repository<TeamCompetitionSeason>) {
    super(entityRepo);
  }
}

@AuthedController('teamCompetitionSeason')
export class TeamCompetitionSeasonController extends CrudController<TeamCompetitionSeason, CreateTeamCompetitionSeasonDto>(TeamCompetitionSeason, CreateTeamCompetitionSeasonDto){
  constructor(private service: TeamCompetitionSeasonservice) {
    super(service)
  }
}

@Module({
  imports: [TypeOrmModule.forFeature([TeamCompetitionSeason])],
  controllers: [TeamCompetitionSeasonController],
  providers: [TeamCompetitionSeasonservice]
})


export class TeamCompetitionSeasonModule {}