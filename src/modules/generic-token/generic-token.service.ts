import { Injectable } from '@nestjs/common';
import {DeepPartial} from "typeorm";
import {CreateGenericTokenDto} from "./entities/generic-token";


@Injectable()
export class GenericTokenService {
  create(createGenericTokenDto: CreateGenericTokenDto) {
    return 'This action adds a new genericToken';
  }

  findAll() {
    return `This action returns all genericToken`;
  }

  findOne(id: number) {
    return `This action returns a #${id} genericToken`;
  }

  update(id: number, updateGenericTokenDto: DeepPartial<CreateGenericTokenDto>) {
    return `This action updates a #${id} genericToken`;
  }

  remove(id: number) {
    return `This action removes a #${id} genericToken`;
  }
}
