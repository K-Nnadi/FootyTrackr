import { Injectable } from '@nestjs/common';
import {CreateStadiumDto} from "./entities/stadium";
import {DeepPartial} from "typeorm";


@Injectable()
export class StadiumService {
  create(createStadiumDto: CreateStadiumDto) {
    return 'This action adds a new stadium';
  }

  findAll() {
    return `This action returns all stadium`;
  }

  findOne(id: number) {
    return `This action returns a #${id} stadium`;
  }

  update(id: number, updateStadiumDto: DeepPartial<CreateStadiumDto>) {
    return `This action updates a #${id} stadium`;
  }

  remove(id: number) {
    return `This action removes a #${id} stadium`;
  }
}
