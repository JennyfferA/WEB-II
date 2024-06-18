import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { AspiranteService } from './anspirante.service';
import { CreateAspiranteDto } from './dto/create-anspirante.dto';
import { UpdateAnspiranteDto } from './dto/update-anspirante.dto';

@Controller('anspirante')
export class AnspiranteController {
  constructor(private readonly anspiranteService: AspiranteService) {}

  @Post()
  create(@Body() createAnspiranteDto: CreateAspiranteDto) {
    return this.anspiranteService.create(createAnspiranteDto);
  }

  @Get()
  findAll() {
    return this.anspiranteService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: number) {
    return this.anspiranteService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: number, @Body() updateAnspiranteDto: UpdateAnspiranteDto) {
    return this.anspiranteService.update(id, updateAnspiranteDto);
  }

  @Delete(':id')
  remove(@Param('id') id: number) {
    return this.anspiranteService.remove(id);
  }
}
