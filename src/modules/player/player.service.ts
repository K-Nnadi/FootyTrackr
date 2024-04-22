import { Injectable } from '@nestjs/common';
import {CreatePlayerDto} from "./player";
import {DeepPartial} from "typeorm";


@Injectable()
export class PlayerService {
  create(createPlayerDto: CreatePlayerDto) {
    return 'This action adds a new player';
  }

  findAll() {
    return `This action returns all player`;
  }

  findOne(id: number) {
    return `This action returns a #${id} player`;
  }

  update(id: number, updatePlayerDto: DeepPartial<CreatePlayerDto>) {
    return `This action updates a #${id} player`;
  }

  remove(id: number) {
    return `This action removes a #${id} player`;
  }
}
