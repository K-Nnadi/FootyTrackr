"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CONFIG = exports.TYPEORM_CONFIG = void 0;
const configService_provider_1 = require("../providers/configService.provider");
const typeorm_1 = require("@nestjs/typeorm");
const config_1 = require("@nestjs/config");
const ENV = process.env.NODE_ENV;
console.log("PROCESS.ENV", ENV);
exports.TYPEORM_CONFIG = typeorm_1.TypeOrmModule.forRootAsync({
    useClass: configService_provider_1.ConfigServiceProvider,
    inject: [configService_provider_1.ConfigServiceProvider],
});
exports.CONFIG = config_1.ConfigModule.forRoot({
    envFilePath: ENV === 'development' ? '.env' : 'SUI',
    isGlobal: true
});
//# sourceMappingURL=config.js.map