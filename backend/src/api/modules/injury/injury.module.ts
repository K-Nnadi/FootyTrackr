import {Injectable, Module} from '@nestjs/common';
import {InjectRepository, TypeOrmModule} from "@nestjs/typeorm";
import {CreateInjuryDto, Injury} from "./injury";
import {CrudController} from "@iWatchFootball/base-tools/crud/crud.controller";
import {AuthedController} from "@iWatchFootball/base-tools/decorators/controller.decorator";
import {CrudRepoAdapter} from "@iWatchFootball/base-tools/crud/crud.repo.adapter";
import {Repository} from "typeorm";


@Injectable()
class InjuryService extends CrudRepoAdapter<Injury, CreateInjuryDto> {
  constructor(@InjectRepository(Injury) private entityRepo: Repository<Injury>) {
    super(entityRepo);
  }
}

@AuthedController('injury')
export class InjuryController extends CrudController<Injury, CreateInjuryDto>(Injury, CreateInjuryDto){
  constructor(private service: InjuryService) {
    super(service)
  }
}

@Module({
  imports: [TypeOrmModule.forFeature([Injury])],
  controllers: [InjuryController],
  providers: [InjuryService]
})


export class InjuryModule {}
