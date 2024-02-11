import {Body, Controller, Delete, Get, Param, Patch, Post} from '@nestjs/common';
import {DeepPartial} from "typeorm";
import {CreateClubDto} from "./entities/club";
import {ClubService} from "./club.service";

@Controller('club')
export class ClubController {
  constructor(private readonly clubService: ClubService) {}

  @Post()
  create(@Body() createClubDto: CreateClubDto) {
    return this.clubService.create(createClubDto);
  }

  @Get()
  findAll() {
    return this.clubService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.clubService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateClubDto: DeepPartial<CreateClubDto>) {
    return this.clubService.update(+id, updateClubDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.clubService.remove(+id);
  }
}
