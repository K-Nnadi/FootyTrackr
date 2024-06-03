import {Controller, Module} from '@nestjs/common';
import {StadiumService} from './stadium.service';
import {TypeOrmModule} from "@nestjs/typeorm";
import {CreateStadiumDto, Stadium} from "./stadium";
import {CrudController} from "@fl/base-tools/crud/crud.controller";

@Controller('stadium')
export class StadiumController extends CrudController<Stadium, CreateStadiumDto>(Stadium, CreateStadiumDto){
  constructor(private service: StadiumService) {
    super(service)
  }
}

@Module({
  imports: [TypeOrmModule.forFeature([Stadium])],
  controllers: [StadiumController],
  providers: [StadiumService]
})
export class StadiumModule {}
