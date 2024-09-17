import {Injectable, Module} from '@nestjs/common';
import {InjectRepository, TypeOrmModule} from "@nestjs/typeorm";
import {CreateTrophyDto, Trophy} from "./trophy";
import {CrudController} from "@iWatchFootball/base-tools/crud/crud.controller";
import {AuthedController} from "@iWatchFootball/base-tools/decorators/controller.decorator";
import {CrudRepoAdapter} from "@iWatchFootball/base-tools/crud/crud.repo.adapter";
import {Repository} from "typeorm";


@Injectable()
export class TrophyService extends CrudRepoAdapter<Trophy, CreateTrophyDto> {
  constructor(@InjectRepository(Trophy) private entityRepo: Repository<Trophy>) {
    super(entityRepo);
  }
}

@AuthedController('trophy')
export class TrophyController extends CrudController<Trophy, CreateTrophyDto>(Trophy, CreateTrophyDto){
  constructor(private service: TrophyService) {
    super(service)
  }
}

@Module({
  imports: [TypeOrmModule.forFeature([Trophy])],
  controllers: [TrophyController],
  providers: [TrophyService],
  exports: [TrophyService]
})


export class TrophyModule {}
