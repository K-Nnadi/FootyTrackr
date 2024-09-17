import {Injectable, Module} from '@nestjs/common';
import {InjectRepository, TypeOrmModule} from "@nestjs/typeorm";
import {CreateAddressDto, Address} from "./address";
import {CrudController} from "@iWatchFootball/base-tools/crud/crud.controller";
import {AuthedController} from "@iWatchFootball/base-tools/decorators/controller.decorator";
import {CrudRepoAdapter} from "@iWatchFootball/base-tools/crud/crud.repo.adapter";
import {Repository} from "typeorm";


@Injectable()
export class AddressService extends CrudRepoAdapter<Address, CreateAddressDto> {
  constructor(@InjectRepository(Address) private entityRepo: Repository<Address>) {
    super(entityRepo);
  }
}

@AuthedController('address')
export class AddressController extends CrudController<Address, CreateAddressDto>(Address, CreateAddressDto){
  constructor(private service: AddressService) {
    super(service)
  }
}

@Module({
  imports: [TypeOrmModule.forFeature([Address])],
  controllers: [AddressController],
  providers: [AddressService],
  exports: [AddressService]
})


export class AddressModule {}
