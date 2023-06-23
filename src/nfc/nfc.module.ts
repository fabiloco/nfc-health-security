import { Module } from '@nestjs/common';
import { NfcService } from './nfc.service';
import { NfcController } from './nfc.controller';
import { PrismaService } from 'src/prisma.service';

@Module({
  controllers: [NfcController],
  providers: [NfcService, PrismaService],
})
export class NfcModule {}
