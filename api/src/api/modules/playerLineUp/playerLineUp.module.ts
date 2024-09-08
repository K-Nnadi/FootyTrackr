import {Injectable, Module} from '@nestjs/common';
import {InjectRepository, TypeOrmModule} from "@nestjs/typeorm";
import {CreatePlayerLineUpDto, PlayerLineUp} from "./playerLineUp";
import {CrudController} from "@footyTrackr/base-tools/crud/crud.controller";
import {AuthedController} from "@footyTrackr/base-tools/decorators/controller.decorator";
import {CrudRepoAdapter} from "@footyTrackr/base-tools/crud/crud.repo.adapter";
import {Repository} from "typeorm";


@Injectable()
class PlayerLineUpService extends CrudRepoAdapter<PlayerLineUp, CreatePlayerLineUpDto> {
  constructor(@InjectRepository(PlayerLineUp) private entityRepo: Repository<PlayerLineUp>) {
    super(entityRepo);
  }
}

@AuthedController('playerLineUp')
export class PlayerLineUpController extends CrudController<PlayerLineUp, CreatePlayerLineUpDto>(PlayerLineUp, CreatePlayerLineUpDto){
  constructor(private service: PlayerLineUpService) {
    super(service)
  }
}

@Module({
  imports: [TypeOrmModule.forFeature([PlayerLineUp])],
  controllers: [PlayerLineUpController],
  providers: [PlayerLineUpService]
})


export class PlayerLineUpModule {}
