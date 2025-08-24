import { Injectable } from '@nestjs/common';
import { RpcException } from '@nestjs/microservices';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class UserService {
  constructor(private readonly prismaService: PrismaService) {}

  async getUserLogin(email: string) {
    const user = await this.prismaService.user.findFirst({
      where: {
        email,
      },
    });

    return user;
  }

  async createUser(payload: { email: string; name: string; password: string }) {
    const { email, name, password: pass } = payload;

    if (!email || !name || !pass) {
      throw new RpcException({
        error: 'bad_request',
        message: 'Payload para criar usuário incorreto',
      });
    }

    const user = await this.prismaService.user.create({
      data: payload,
    });

    const { password, ...userSemSenha } = user;

    return userSemSenha;
  }
}
