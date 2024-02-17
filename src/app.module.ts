import {Module} from '@nestjs/common';
import {StadiumModule} from './modules/stadium/stadium.module';
import {PlayerModule} from './modules/player/player.module';
import {ManagerModule} from './modules/manager/manager.module';
import {ClubModule} from './modules/club/club.module';
import {LogModule} from './modules/log/log.module';
import {GenericTokenModule} from './modules/generic-token/generic-token.module';
import {UserModule} from "./modules/user/user.module";
import {TypeOrmModule} from "@nestjs/typeorm";
import {ConfigServiceProvider} from "./shared/config/configService";
import {ConfigModule} from "@nestjs/config";

const Modules = [StadiumModule, PlayerModule, ManagerModule, ClubModule, LogModule, GenericTokenModule, UserModule]
export const TypeOrmConfig = TypeOrmModule.forRootAsync(
    {
        useClass: ConfigServiceProvider,
        inject: [ConfigServiceProvider]
    })

export const CONFIG = ConfigModule.forRoot({
    envFilePath: '.env',
    isGlobal: true
})


@Module({
    imports: [CONFIG, TypeOrmConfig, ...Modules],

})
export class AppModule {
}
