import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { PrismaService } from 'src/prisma.service';

import { ReadNfcDto } from './dto/read-nfc.dto';
import { RegisterNfcDto } from './dto/register-nfc.dto';

@Injectable()
export class NfcService {
  constructor(private prisma: PrismaService, private jwtService: JwtService) {}

  encryptPayload(nfc_uid: string, blockchain_hash: string) {
    //TODO: mejorar el método de encriptado
    return nfc_uid + '🐴' + blockchain_hash;
  }

  decryptPayload(encryptedPayload: string) {
    //TODO: mejorar el método de encriptado
    return encryptedPayload.split('🐴');
  }

  async register(userID: string, registerNfcDto: RegisterNfcDto) {
    const { nfc_uid, blockchain_hash } = registerNfcDto;

    const encrypted_payload = this.encryptPayload(nfc_uid, blockchain_hash);

    const token = this.jwtService.sign({
      payload: encrypted_payload,
    });

    const newNfc = await this.prisma.nfc.create({
      data: {
        token,
        user_id: Number(userID),
      },
    });

    return { nfc_id: newNfc.id };
  }

  async read(readNfcDto: ReadNfcDto) {
    const { nfc_payload, nfc_uid } = readNfcDto;

    const nfc = await this.prisma.nfc.findUnique({
      where: {
        id: nfc_payload,
      },
    });

    if (!nfc) {
      throw new HttpException(
        'There is no NFC with such payload registered',
        HttpStatus.NOT_FOUND,
      );
    }

    const { token, user_id } = nfc;

    const token_decoded = this.jwtService.decode(token) as { payload: string };

    const [nfc_uid_decrypted] = this.decryptPayload(token_decoded.payload);

    if (nfc_uid !== nfc_uid_decrypted) {
      throw new HttpException(
        'NFC uid and payload do not match',
        HttpStatus.FORBIDDEN,
      );
    }

    const user = await this.prisma.user.findUnique({
      where: {
        id: user_id,
      },
      include: {
        person: {
          include: {
            allergies: true,
            contacts: true,
            conditions: true,
            medications: true,
            appointments: true,
          },
        },
      },
    });

    if (!user) {
      throw new HttpException('User not found', HttpStatus.NOT_FOUND);
    }

    return { user };
  }

  async delete(readNfcDto: ReadNfcDto) {
    const { nfc_payload, nfc_uid } = readNfcDto;

    const nfc = await this.prisma.nfc.findUnique({
      where: {
        id: nfc_payload,
      },
    });

    if (!nfc) {
      throw new HttpException(
        'There is no NFC with such payload registered',
        HttpStatus.NOT_FOUND,
      );
    }

    const { token, user_id } = nfc;

    const token_decoded = this.jwtService.decode(token) as { payload: string };

    const [nfc_uid_decrypted] = this.decryptPayload(token_decoded.payload);

    if (nfc_uid !== nfc_uid_decrypted) {
      throw new HttpException(
        'NFC uid and payload do not match',
        HttpStatus.FORBIDDEN,
      );
    }

    const user = await this.prisma.user.findUnique({
      where: {
        id: user_id,
      },
      include: {
        person: {
          include: {
            allergies: true,
            contacts: true,
            conditions: true,
            medications: true,
            appointments: true,
          },
        },
      },
    });

    if (!user) {
      throw new HttpException('User not found', HttpStatus.NOT_FOUND);
    }

    return { user };
  }
}
