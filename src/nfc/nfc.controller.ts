import { Controller, Post, Body, Param, Delete } from '@nestjs/common';

import { NfcService } from './nfc.service';

import { RegisterNfcDto } from './dto/register-nfc.dto';
import { ReadNfcDto } from './dto/read-nfc.dto';
import { DeleteNfcDto } from './dto/delete-nfc.dto';

import { RolesAndOwner } from 'src/auth/roles.decorator';

import { Role } from 'src/auth/role.enum';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';

@ApiBearerAuth()
@ApiTags('nfc')
@Controller('nfc')
@RolesAndOwner(Role.TEACHER, Role.ADMIN)
export class NfcController {
  constructor(private readonly nfcService: NfcService) {}

  @Delete('delete/:id')
  delete(@Param('id') id: string, @Body() deleteNfcDto: DeleteNfcDto) {
    return this.nfcService.delete(deleteNfcDto);
  }

  @Post('register/:id')
  register(@Param('id') id: string, @Body() registerNfcDto: RegisterNfcDto) {
    return this.nfcService.register(id, registerNfcDto);
  }

  @Post('read/:id')
  read(@Param('id') id: string, @Body() readNfcDto: ReadNfcDto) {
    return this.nfcService.read(readNfcDto);
  }
}
