import {Injectable, Module} from '@nestjs/common';
import {InjectRepository, TypeOrmModule} from "@nestjs/typeorm";
import {CreateCardDto, Card} from "./card";
import {CrudController} from "@footyTrackr/base-tools/crud/crud.controller";
import {AuthedController} from "@footyTrackr/base-tools/decorators/controller.decorator";
import {CrudRepoAdapter} from "@footyTrackr/base-tools/crud/crud.repo.adapter";
import {Repository} from "typeorm";


@Injectable()
class CardService extends CrudRepoAdapter<Card, CreateCardDto> {
    constructor(@InjectRepository(Card) private entityRepo: Repository<Card>) {
        super(entityRepo);
    }
}

@AuthedController('card')
export class CardController extends CrudController<Card, CreateCardDto>(Card, CreateCardDto) {
    constructor(private service: CardService) {
        super(service)
    }
}

@Module({
    imports: [TypeOrmModule.forFeature([Card])],
    controllers: [CardController],
    providers: [CardService]
})


export class CardModule {
}
