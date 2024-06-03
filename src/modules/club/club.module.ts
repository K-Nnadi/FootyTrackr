import {Controller, Module} from '@nestjs/common';
import {ClubService} from './club.service';
import {TypeOrmModule} from "@nestjs/typeorm";
import {Club, CreateClubDto} from "./club";
import {CrudController} from "@fl/base-tools/crud/crud.controller";


@Controller('club')
export class ClubController extends CrudController<Club, CreateClubDto>(Club, CreateClubDto){
  constructor(private service: ClubService) {
    super(service)
  }
}

@Module({
  imports: [TypeOrmModule.forFeature([Club])],
  controllers: [ClubController],
  providers: [ClubService]
})
export class ClubModule {}
