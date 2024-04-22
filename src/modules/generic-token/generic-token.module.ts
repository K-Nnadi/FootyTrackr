import {Controller, Module} from '@nestjs/common';
import {GenericTokenService} from './generic-token.service';
import {TypeOrmModule} from "@nestjs/typeorm";
import {CreateGenericTokenDto, GenericToken} from "./generic-token";
import {CrudController} from "@fl/base-tools/crud/crud.controller";

@Controller('genericToken')
export class GenericTokenController extends CrudController<GenericToken, CreateGenericTokenDto>(GenericToken, CreateGenericTokenDto) {
    constructor(private service: GenericTokenService) {
        super(service)
    }
}

@Module({
    imports: [TypeOrmModule.forFeature([GenericToken])],
    controllers: [GenericTokenController],
    providers: [GenericTokenService]
})
export class GenericTokenModule {
}
