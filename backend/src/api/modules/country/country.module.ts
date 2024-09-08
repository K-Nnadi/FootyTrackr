import {Injectable, Module} from '@nestjs/common';
import {InjectRepository, TypeOrmModule} from "@nestjs/typeorm";
import {CreateClubDto, Country} from "./country";
import {CrudController} from "@footyTrackr/base-tools/crud/crud.controller";
import {AuthedController} from "@footyTrackr/base-tools/decorators/controller.decorator";
import {CrudRepoAdapter} from "@footyTrackr/base-tools/crud/crud.repo.adapter";
import {Repository} from "typeorm";


@Injectable()
class ClubService extends CrudRepoAdapter<Country, CreateClubDto> {
  constructor(@InjectRepository(Country) private entityRepo: Repository<Country>) {
    super(entityRepo);
  }
}

@AuthedController('club')
export class ClubController extends CrudController<Country, CreateClubDto>(Country, CreateClubDto){
  constructor(private service: ClubService) {
    super(service)
  }
}

@Module({
  imports: [TypeOrmModule.forFeature([Country])],
  controllers: [ClubController],
  providers: [ClubService]
})


export class CountryModule {}
