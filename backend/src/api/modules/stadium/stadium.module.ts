import {Injectable, Module} from '@nestjs/common';
import {InjectRepository, TypeOrmModule} from "@nestjs/typeorm";
import {CreateStadiumDto, Stadium} from "./stadium";
import {CrudController} from "@iWatchFootball/base-tools/crud/crud.controller";
import {AuthedController} from "@iWatchFootball/base-tools/decorators/controller.decorator";
import {CrudRepoAdapter} from "@iWatchFootball/base-tools/crud/crud.repo.adapter";
import {Repository} from "typeorm";


@Injectable()
class StadiumService extends CrudRepoAdapter<Stadium, CreateStadiumDto> {
  constructor(@InjectRepository(Stadium) private entityRepo: Repository<Stadium>) {
    super(entityRepo);
  }
}

@AuthedController('stadium')
export class StadiumController extends CrudController<Stadium, CreateStadiumDto>(Stadium, CreateStadiumDto){
  constructor(private service: StadiumService) {
    super(service)
  }
}

@Module({
  imports: [TypeOrmModule.forFeature([Stadium])],
  controllers: [StadiumController],
  providers: [StadiumService]
})


export class StadiumModule {}
