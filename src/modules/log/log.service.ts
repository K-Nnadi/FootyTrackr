import { Injectable } from '@nestjs/common';
import {DeepPartial} from "typeorm";
import {CreateLogDto} from "./entities/log";


@Injectable()
export class LogService {
  create(createLogDto: CreateLogDto) {
    return 'This action adds a new log';
  }

  findAll() {
    return `This action returns all log`;
  }

  findOne(id: number) {
    return `This action returns a #${id} log`;
  }

  update(id: number, updateLogDto: DeepPartial<CreateLogDto>) {
    return `This action updates a #${id} log`;
  }

  remove(id: number) {
    return `This action removes a #${id} log`;
  }
}
