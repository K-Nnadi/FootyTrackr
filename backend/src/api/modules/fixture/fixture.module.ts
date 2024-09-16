import {Injectable, Module} from '@nestjs/common';
import {InjectRepository, TypeOrmModule} from "@nestjs/typeorm";
import {CreateFixtureDto, Fixture} from "./fixture";
import {CrudController} from "@iWatchFootball/base-tools/crud/crud.controller";
import {AuthedController} from "@iWatchFootball/base-tools/decorators/controller.decorator";
import {CrudRepoAdapter} from "@iWatchFootball/base-tools/crud/crud.repo.adapter";
import {Repository} from "typeorm";


@Injectable()
class FixtureService extends CrudRepoAdapter<Fixture, CreateFixtureDto> {
  constructor(@InjectRepository(Fixture) private entityRepo: Repository<Fixture>) {
    super(entityRepo);
  }
}

@AuthedController('fixture')
export class FixtureController extends CrudController<Fixture, CreateFixtureDto>(Fixture, CreateFixtureDto){
  constructor(private service: FixtureService) {
    super(service)
  }
}

@Module({
  imports: [TypeOrmModule.forFeature([Fixture])],
  controllers: [FixtureController],
  providers: [FixtureService]
})


export class FixtureModule {}
