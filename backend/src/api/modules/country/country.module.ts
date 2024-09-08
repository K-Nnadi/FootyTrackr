import {Injectable, Module} from '@nestjs/common';
import {InjectRepository, TypeOrmModule} from "@nestjs/typeorm";
import {CreateCountryDto, Country} from "./country";
import {CrudController} from "@footyTrackr/base-tools/crud/crud.controller";
import {AuthedController} from "@footyTrackr/base-tools/decorators/controller.decorator";
import {CrudRepoAdapter} from "@footyTrackr/base-tools/crud/crud.repo.adapter";
import {Repository} from "typeorm";


@Injectable()
class CountryService extends CrudRepoAdapter<Country, CreateCountryDto> {
  constructor(@InjectRepository(Country) private entityRepo: Repository<Country>) {
    super(entityRepo);
  }
}

@AuthedController('country')
export class CountryController extends CrudController<Country, CreateCountryDto>(Country, CreateCountryDto){
  constructor(private service: CountryService) {
    super(service)
  }
}

@Module({
  imports: [TypeOrmModule.forFeature([Country])],
  controllers: [CountryController],
  providers: [CountryService]
})


export class CountryModule {}
