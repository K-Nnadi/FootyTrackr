import {TypeOrmModuleOptions, TypeOrmOptionsFactory} from "@nestjs/typeorm";
import {Injectable} from "@nestjs/common";
import {ConfigService} from "@nestjs/config";

@Injectable()
export class ConfigServiceProvider implements TypeOrmOptionsFactory {
    constructor(private configService: ConfigService) {}

    createTypeOrmOptions(): TypeOrmModuleOptions {
        return {
            type: this.configService.get('DATABASE_TYPE'),
            host: this.configService.get('DATABASE_HOST'),
            port: this.configService.get('DATABASE_PORT'),
            username: this.configService.get('DATABASE_USERNAME'),
            autoLoadEntities: true,
            // @ts-ignore
            password: this.configService.get('DATABASE_PASSWORD'),
            database: this.configService.get('DATABASE_NAME'),
            logging: true,
            synchronize: this.configService.get('DATABASE_SYNCHRONIZE') === 'true',
            migrationsRun: true,
            migrations: [`src/shared/migrations/*{.ts,.js}`]
        };
    }
}