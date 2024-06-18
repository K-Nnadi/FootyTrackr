import {Module} from '@nestjs/common';
import {StadiumModule} from './modules/stadium/stadium.module';
import {PlayerModule} from './modules/player/player.module';
import {ManagerModule} from './modules/manager/manager.module';
import {ClubModule} from './modules/club/club.module';
import {LogModule} from './modules/log/log.module';
import {GenericTokenModule} from './modules/generic-token/generic-token.module';
import {UserModule} from "./modules/user/user.module";
import {CONFIG, TYPEORM_CONFIG} from "@footyTrackr/base-tools/config/config";

const Modules = [StadiumModule, PlayerModule, ManagerModule, ClubModule, LogModule, GenericTokenModule, UserModule]

@Module({
    imports: [CONFIG, TYPEORM_CONFIG, ...Modules],
})
export class AppModule {
}

