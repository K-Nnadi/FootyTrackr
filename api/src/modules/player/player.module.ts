import {Injectable, Module} from '@nestjs/common';
import {InjectRepository, TypeOrmModule} from "@nestjs/typeorm";
import {CreatePlayerDto, Player} from "./player";
import {CrudController} from "@footyTrackr/base-tools/crud/crud.controller";
import {AuthedController} from "@footyTrackr/base-tools/decorators/controller.decorator";
import {CrudRepoAdapter} from "@footyTrackr/base-tools/crud/crud.repo.adapter";
import {Repository} from "typeorm";


@Injectable()
class PlayerService extends CrudRepoAdapter<Player, CreatePlayerDto> {
    constructor(@InjectRepository(Player) private entityRepo: Repository<Player>) {
        super(entityRepo);
    }
}

@AuthedController('player')
export class PlayerController extends CrudController<Player, CreatePlayerDto>(Player, CreatePlayerDto){
    constructor(private service: PlayerService) {
        super(service)
    }
}

@Module({
    imports: [TypeOrmModule.forFeature([Player])],
    controllers: [PlayerController],
    providers: [PlayerService]
})


export class PlayerModule {}
