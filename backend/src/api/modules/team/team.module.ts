import {Injectable, Module} from '@nestjs/common';
import {InjectRepository, TypeOrmModule} from "@nestjs/typeorm";
import {CreateTeamDto, Team} from "./team";
import {CrudController} from "@iWatchFootball/base-tools/crud/crud.controller";
import {AuthedController} from "@iWatchFootball/base-tools/decorators/controller.decorator";
import {CrudRepoAdapter} from "@iWatchFootball/base-tools/crud/crud.repo.adapter";
import {Repository} from "typeorm";


@Injectable()
class TeamService extends CrudRepoAdapter<Team, CreateTeamDto> {
  constructor(@InjectRepository(Team) private entityRepo: Repository<Team>) {
    super(entityRepo);
  }
}

@AuthedController('team')
export class TeamController extends CrudController<Team, CreateTeamDto>(Team, CreateTeamDto){
  constructor(private service: TeamService) {
    super(service)
  }
}

@Module({
  imports: [TypeOrmModule.forFeature([Team])],
  controllers: [TeamController],
  providers: [TeamService]
})


export class TeamModule {}
