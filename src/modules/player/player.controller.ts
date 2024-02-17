import {Controller} from '@nestjs/common';
import {Player, CreatePlayerDto} from "./entities/player";
import {PlayerService} from "./player.service";
import {CrudController} from "@fl/base-tools/crud/crud.controller";

@Controller('player')
export class PlayerController extends CrudController<Player, CreatePlayerDto>(Player, CreatePlayerDto){
  constructor(private service: PlayerService) {
    super(service)
  }
}
