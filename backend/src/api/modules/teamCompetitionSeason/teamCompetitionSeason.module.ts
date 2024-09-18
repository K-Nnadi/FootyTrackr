import {Injectable, Module} from '@nestjs/common';
import {InjectRepository, TypeOrmModule} from "@nestjs/typeorm";
import {CreateTeamCompetitionSeasonDTO, TeamCompetitionSeason} from "./teamCompetitionSeason";
import {CrudController} from "@iWatchFootball/base-tools/crud/crud.controller";
import {AuthedController} from "@iWatchFootball/base-tools/decorators/controller.decorator";
import {CrudRepoAdapter} from "@iWatchFootball/base-tools/crud/crud.repo.adapter";
import {Repository} from "typeorm";


@Injectable()
export class TeamCompetitionSeasonservice extends CrudRepoAdapter<TeamCompetitionSeason, CreateTeamCompetitionSeasonDTO> {
  constructor(@InjectRepository(TeamCompetitionSeason) private entityRepo: Repository<TeamCompetitionSeason>) {
    super(entityRepo);
  }
}

@AuthedController('teamCompetitionSeason')
export class TeamCompetitionSeasonController extends CrudController<TeamCompetitionSeason, CreateTeamCompetitionSeasonDTO>(TeamCompetitionSeason, CreateTeamCompetitionSeasonDTO){
  constructor(private service: TeamCompetitionSeasonservice) {
    super(service)
  }
}

@Module({
  imports: [TypeOrmModule.forFeature([TeamCompetitionSeason])],
  controllers: [TeamCompetitionSeasonController],
  providers: [TeamCompetitionSeasonservice],
  exports: [TeamCompetitionSeasonservice]
})


export class TeamCompetitionSeasonModule {}
