import {Injectable, Module} from '@nestjs/common';
import {InjectRepository, TypeOrmModule} from "@nestjs/typeorm";
import {CreateGenericTokenDto, GenericToken} from "./genericToken";
import {CrudController} from "@iWatchFootball/base-tools/crud/crud.controller";
import {AuthedController} from "@iWatchFootball/base-tools/decorators/controller.decorator";
import {CrudRepoAdapter} from "@iWatchFootball/base-tools/crud/crud.repo.adapter";
import {Repository} from "typeorm";


@Injectable()
export class GenericTokenService extends CrudRepoAdapter<GenericToken, CreateGenericTokenDto> {
    constructor(@InjectRepository(GenericToken) private entityRepo: Repository<GenericToken>) {
        super(entityRepo);
    }
}

@AuthedController('genericToken')
export class GenericTokenController extends CrudController<GenericToken, CreateGenericTokenDto>(GenericToken, CreateGenericTokenDto){
    constructor(private service: GenericTokenService) {
        super(service)
    }
}

@Module({
    imports: [TypeOrmModule.forFeature([GenericToken])],
    controllers: [GenericTokenController],
    providers: [GenericTokenService],
    exports: [GenericTokenService]
})


export class GenericTokenModule {}
