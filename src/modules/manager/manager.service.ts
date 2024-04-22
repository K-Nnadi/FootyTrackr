import { Injectable } from '@nestjs/common';
import {DeepPartial} from "typeorm";
import {CreateManagerDto} from "./manager";


@Injectable()
export class ManagerService {
  create(createManagerDto: CreateManagerDto) {
    return 'This action adds a new manager';
  }

  findAll() {
    return `This action returns all manager`;
  }

  findOne(id: number) {
    return `This action returns a #${id} manager`;
  }

  update(id: number, updateManagerDto: DeepPartial<CreateManagerDto>) {
    return `This action updates a #${id} manager`;
  }

  remove(id: number) {
    return `This action removes a #${id} manager`;
  }
}
