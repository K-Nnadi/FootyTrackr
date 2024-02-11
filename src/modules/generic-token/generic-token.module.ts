import {Module} from '@nestjs/common';
import {GenericTokenService} from './generic-token.service';
import {GenericTokenController} from './generic-token.controller';
import {TypeOrmModule} from "@nestjs/typeorm";
import {GenericToken} from "./entities/generic-token";

@Module({
  imports: [TypeOrmModule.forFeature([GenericToken])],
  controllers: [GenericTokenController],
  providers: [GenericTokenService]
})
export class GenericTokenModule {}
