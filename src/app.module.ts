import {Module} from '@nestjs/common';
import {StadiumModule} from './modules/stadium/stadium.module';
import {PlayerModule} from './modules/player/player.module';
import {ManagerModule} from './modules/manager/manager.module';
import {ClubModule} from './modules/club/club.module';
import {LogModule} from './modules/log/log.module';
import {GenericTokenModule} from './modules/generic-token/generic-token.module';
import {UserModule} from "./modules/user/user.module";
import {TypeOrmModule} from "@nestjs/typeorm";
import {TypeOrmConfigService} from "./shared/config/configService";

const Modules = [StadiumModule, PlayerModule, ManagerModule, ClubModule, LogModule, GenericTokenModule, UserModule]
const TypeOrmConfig = TypeOrmModule.forRootAsync(
    {
        useClass: TypeOrmConfigService
    })


@Module({
    imports: [TypeOrmConfig, ...Modules],

})
export class AppModule {
}
