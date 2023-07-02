import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { Role } from 'src/auth/role.enum';
import { RolesAndOwner } from 'src/auth/roles.decorator';
import { AllergyService } from './allergy.service';
import { CreateAllergyDto } from './dto/create-allergy.dto';
import { UpdateAllergyDto } from './dto/update-allergy.dto';

@ApiTags('allergy')
@RolesAndOwner(Role.DOCTOR)
@Controller('allergy')
export class AllergyController {
  constructor(private readonly allergyService: AllergyService) {}

  @Post(':id')
  create(@Param('id') id: string, @Body() createAllergyDto: CreateAllergyDto) {
    return this.allergyService.create(createAllergyDto);
  }

  @Get()
  findAll() {
    return this.allergyService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.allergyService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateAllergyDto: UpdateAllergyDto) {
    return this.allergyService.update(+id, updateAllergyDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.allergyService.remove(+id);
  }
}
