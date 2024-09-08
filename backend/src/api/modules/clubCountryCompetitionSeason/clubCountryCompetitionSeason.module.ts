import {Injectable, Module} from '@nestjs/common';
import {InjectRepository, TypeOrmModule} from "@nestjs/typeorm";
import {CreateClubCountryCompetitionSeasonDto, ClubCountryCompetitionSeason} from "./clubCountryCompetitionSeason";
import {CrudController} from "@footyTrackr/base-tools/crud/crud.controller";
import {AuthedController} from "@footyTrackr/base-tools/decorators/controller.decorator";
import {CrudRepoAdapter} from "@footyTrackr/base-tools/crud/crud.repo.adapter";
import {Repository} from "typeorm";


@Injectable()
class ClubCountryCompetitionSeasonService extends CrudRepoAdapter<ClubCountryCompetitionSeason, CreateClubCountryCompetitionSeasonDto> {
  constructor(@InjectRepository(ClubCountryCompetitionSeason) private entityRepo: Repository<ClubCountryCompetitionSeason>) {
    super(entityRepo);
  }
}

@AuthedController('clubCountryCompetitionSeason')
export class ClubCountryCompetitionSeasonController extends CrudController<ClubCountryCompetitionSeason, CreateClubCountryCompetitionSeasonDto>(ClubCountryCompetitionSeason, CreateClubCountryCompetitionSeasonDto){
  constructor(private service: ClubCountryCompetitionSeasonService) {
    super(service)
  }
}

@Module({
  imports: [TypeOrmModule.forFeature([ClubCountryCompetitionSeason])],
  controllers: [ClubCountryCompetitionSeasonController],
  providers: [ClubCountryCompetitionSeasonService]
})


export class ClubCountryCompetitionSeasonModule {}
