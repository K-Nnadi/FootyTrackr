import { Module } from '@nestjs/common';
import { StadiumService } from './stadium.service';
import { StadiumController } from './stadium.controller';
import {TypeOrmModule} from "@nestjs/typeorm";
import {Stadium} from "./entities/stadium";

@Module({
  imports: [TypeOrmModule.forFeature([Stadium])],
  controllers: [StadiumController],
  providers: [StadiumService]
})
export class StadiumModule {}
