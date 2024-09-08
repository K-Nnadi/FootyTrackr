import {Injectable, Module} from '@nestjs/common';
import {InjectRepository, TypeOrmModule} from "@nestjs/typeorm";
import {CreateLineUpDto, LineUp} from "./lineUp";
import {CrudController} from "@footyTrackr/base-tools/crud/crud.controller";
import {AuthedController} from "@footyTrackr/base-tools/decorators/controller.decorator";
import {CrudRepoAdapter} from "@footyTrackr/base-tools/crud/crud.repo.adapter";
import {Repository} from "typeorm";


@Injectable()
class LineupService extends CrudRepoAdapter<LineUp, CreateLineUpDto> {
  constructor(@InjectRepository(LineUp) private entityRepo: Repository<LineUp>) {
    super(entityRepo);
  }
}

@AuthedController('lineUp')
export class LineupController extends CrudController<LineUp, CreateLineUpDto>(LineUp, CreateLineUpDto){
  constructor(private service: LineupService) {
    super(service)
  }
}

@Module({
  imports: [TypeOrmModule.forFeature([LineUp])],
  controllers: [LineupController],
  providers: [LineupService]
})


export class LineUpModule {}
