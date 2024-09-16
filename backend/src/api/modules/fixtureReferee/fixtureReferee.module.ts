import {Injectable, Module} from '@nestjs/common';
import {InjectRepository, TypeOrmModule} from "@nestjs/typeorm";
import {CreateFixtureRefereeDto, FixtureReferee} from "./fixtureReferee";
import {CrudController} from "@iWatchFootball/base-tools/crud/crud.controller";
import {AuthedController} from "@iWatchFootball/base-tools/decorators/controller.decorator";
import {CrudRepoAdapter} from "@iWatchFootball/base-tools/crud/crud.repo.adapter";
import {Repository} from "typeorm";


@Injectable()
class FixtureRefereeService extends CrudRepoAdapter<FixtureReferee, CreateFixtureRefereeDto> {
  constructor(@InjectRepository(FixtureReferee) private entityRepo: Repository<FixtureReferee>) {
    super(entityRepo);
  }
}

@AuthedController('fixtureReferee')
export class FixtureRefereeController extends CrudController<FixtureReferee, CreateFixtureRefereeDto>(FixtureReferee, CreateFixtureRefereeDto){
  constructor(private service: FixtureRefereeService) {
    super(service)
  }
}

@Module({
  imports: [TypeOrmModule.forFeature([FixtureReferee])],
  controllers: [FixtureRefereeController],
  providers: [FixtureRefereeService]
})


export class FixtureRefereeModule {}
