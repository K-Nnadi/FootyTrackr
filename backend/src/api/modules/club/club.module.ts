import {Injectable, Module} from '@nestjs/common';
import {InjectRepository, TypeOrmModule} from "@nestjs/typeorm";
import {CreateClubDto, Club} from "./club";
import {CrudController} from "@footyTrackr/base-tools/crud/crud.controller";
import {AuthedController} from "@footyTrackr/base-tools/decorators/controller.decorator";
import {CrudRepoAdapter} from "@footyTrackr/base-tools/crud/crud.repo.adapter";
import {Repository} from "typeorm";


@Injectable()
class ClubService extends CrudRepoAdapter<Club, CreateClubDto> {
  constructor(@InjectRepository(Club) private entityRepo: Repository<Club>) {
    super(entityRepo);
  }
}

@AuthedController('club')
export class ClubController extends CrudController<Club, CreateClubDto>(Club, CreateClubDto){
  constructor(private service: ClubService) {
    super(service)
  }
}

@Module({
  imports: [TypeOrmModule.forFeature([Club])],
  controllers: [ClubController],
  providers: [ClubService]
})


export class ClubModule {}
