import {Injectable, Module} from '@nestjs/common';
import {InjectRepository, TypeOrmModule} from "@nestjs/typeorm";
import {CreateLineUpDto, LineUp} from "./lineUp";
import {CrudController} from "@iWatchFootball/base-tools/crud/crud.controller";
import {AuthedController} from "@iWatchFootball/base-tools/decorators/controller.decorator";
import {CrudRepoAdapter} from "@iWatchFootball/base-tools/crud/crud.repo.adapter";
import {Repository} from "typeorm";


@Injectable()
export class LineupService extends CrudRepoAdapter<LineUp, CreateLineUpDto> {
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
  providers: [LineupService],
  exports: [LineupService]
})


export class LineUpModule {}
