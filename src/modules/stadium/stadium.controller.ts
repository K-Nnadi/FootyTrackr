import {Controller} from '@nestjs/common';
import {Stadium, CreateStadiumDto} from "./entities/stadium";
import {StadiumService} from "./stadium.service";
import {CrudController} from "../../shared/crud/crud.controller";

@Controller('stadium')
export class StadiumController extends CrudController<Stadium, CreateStadiumDto>(Stadium, CreateStadiumDto){
  constructor(private service: StadiumService) {
    super(service)
  }
}
