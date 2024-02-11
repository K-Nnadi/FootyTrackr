import {Controller} from '@nestjs/common';
import {Club, CreateClubDto} from "./entities/club";
import {ClubService} from "./club.service";
import {CrudController} from "../../shared/crud/crud.controller";

@Controller('club')
export class ClubController extends CrudController<Club, CreateClubDto>(Club, CreateClubDto){
  constructor(private service: ClubService) {
    super(service)
  }
}
