import { Module } from '@nestjs/common';
import { GenericTokenService } from './generic-token.service';
import { GenericTokenController } from './generic-token.controller';

@Module({
  controllers: [GenericTokenController],
  providers: [GenericTokenService]
})
export class GenericTokenModule {}
