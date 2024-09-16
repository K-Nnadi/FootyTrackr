import {Injectable, Module} from '@nestjs/common';
import {InjectRepository, TypeOrmModule} from "@nestjs/typeorm";
import {CreateTransferDto, Transfer} from "./transfer";
import {CrudController} from "@iWatchFootball/base-tools/crud/crud.controller";
import {AuthedController} from "@iWatchFootball/base-tools/decorators/controller.decorator";
import {CrudRepoAdapter} from "@iWatchFootball/base-tools/crud/crud.repo.adapter";
import {Repository} from "typeorm";


@Injectable()
class TransferService extends CrudRepoAdapter<Transfer, CreateTransferDto> {
  constructor(@InjectRepository(Transfer) private entityRepo: Repository<Transfer>) {
    super(entityRepo);
  }
}

@AuthedController('transfer')
export class TransferController extends CrudController<Transfer, CreateTransferDto>(Transfer, CreateTransferDto){
  constructor(private service: TransferService) {
    super(service)
  }
}

@Module({
  imports: [TypeOrmModule.forFeature([Transfer])],
  controllers: [TransferController],
  providers: [TransferService]
})


export class TransferModule {}
