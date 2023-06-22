import { Controller, Body, Patch, Param, Get } from '@nestjs/common';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';

import { PersonService } from './person.service';
import { UpdatePersonDto } from './dto/update-person.dto';

import { Roles, RolesAndOwner } from 'src/auth/roles.decorator';
import { Role } from 'src/auth/role.enum';

@ApiBearerAuth()
@ApiTags('person')
@Controller('person')
export class PersonController {
  constructor(private readonly personService: PersonService) {}

  @RolesAndOwner(Role.ADMIN)
  @Patch(':id')
  update(@Param('id') id: string, @Body() updatePersonDto: UpdatePersonDto) {
    return this.personService.update(+id, updatePersonDto);
  }

  @RolesAndOwner(Role.ADMIN)
  @Get(':id')
  findByDNI(@Param('id') id: string) {
    return this.personService.findByUserId(id);
  }
}
