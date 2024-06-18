import {Controller, Module} from '@nestjs/common';
import {PlayerService} from './player.service';
import {TypeOrmModule} from "@nestjs/typeorm";
import {CreatePlayerDto, Player} from "./player";
import {CrudController} from "@fl/base-tools/crud/crud.controller";

@Controller('player')
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
export class PlayerModule {
}
