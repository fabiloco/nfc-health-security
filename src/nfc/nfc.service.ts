import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';

import { ReadNfcDto } from './dto/read-nfc.dto';
import { RegisterNfcDto } from './dto/register-nfc.dto';

@Injectable()
export class NfcService {
  constructor(private jwtService: JwtService) {}

  async register(registerNfcDto: RegisterNfcDto) {
    const { nfc_uid, blockchain_hash } = registerNfcDto;

    const encrypted_payload = nfc_uid + '🐴' + blockchain_hash;

    const token = this.jwtService.sign({
      payload: encrypted_payload,
    });

    return { payload: token };
  }

  read(readNfcDto: ReadNfcDto) {
    const { nfc_payload } = readNfcDto;

    const payload = this.jwtService.decode(nfc_payload);

    return { payload };
  }
}
