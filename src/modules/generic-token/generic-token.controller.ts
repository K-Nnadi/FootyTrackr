import {Body, Controller, Delete, Get, Param, Patch, Post} from '@nestjs/common';
import {DeepPartial} from "typeorm";
import {CreateGenericTokenDto} from "./entities/generic-token";
import {GenericTokenService} from "./generic-token.service";

@Controller('genericToken')
export class GenericTokenController {
  constructor(private readonly genericTokenService: GenericTokenService) {}

  @Post()
  create(@Body() createGenericTokenDto: CreateGenericTokenDto) {
    return this.genericTokenService.create(createGenericTokenDto);
  }

  @Get()
  findAll() {
    return this.genericTokenService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.genericTokenService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateGenericTokenDto: DeepPartial<CreateGenericTokenDto>) {
    return this.genericTokenService.update(+id, updateGenericTokenDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.genericTokenService.remove(+id);
  }
}
