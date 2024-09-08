import {Injectable, Module} from '@nestjs/common';
import {InjectRepository, TypeOrmModule} from "@nestjs/typeorm";
import {CreateSubstitutionDto, Substitution} from "./substitution";
import {CrudController} from "@footyTrackr/base-tools/crud/crud.controller";
import {AuthedController} from "@footyTrackr/base-tools/decorators/controller.decorator";
import {CrudRepoAdapter} from "@footyTrackr/base-tools/crud/crud.repo.adapter";
import {Repository} from "typeorm";


@Injectable()
class SubstitutionService extends CrudRepoAdapter<Substitution, CreateSubstitutionDto> {
    constructor(@InjectRepository(Substitution) private entityRepo: Repository<Substitution>) {
        super(entityRepo);
    }
}

@AuthedController('substitution')
export class SubstitutionController extends CrudController<Substitution, CreateSubstitutionDto>(Substitution, CreateSubstitutionDto) {
    constructor(private service: SubstitutionService) {
        super(service)
    }
}

@Module({
    imports: [TypeOrmModule.forFeature([Substitution])],
    controllers: [SubstitutionController],
    providers: [SubstitutionService]
})


export class SubstitutionModule {
}
