import {Controller} from '@nestjs/common';
import {GenericToken, CreateGenericTokenDto} from "./entities/generic-token";
import {GenericTokenService} from "./generic-token.service";
import {CrudController} from "@fl/base-tools/crud/crud.controller";

@Controller('genericToken')
export class GenericTokenController extends CrudController<GenericToken, CreateGenericTokenDto>(GenericToken, CreateGenericTokenDto){
  constructor(private service: GenericTokenService) {
    super(service)
  }
}
