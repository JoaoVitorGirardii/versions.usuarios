import { Controller } from '@nestjs/common';
import { MessagePattern } from '@nestjs/microservices';
import { User } from 'generated/prisma';
import { CommandsUsuario } from './const/commandsUsuario.const';
import { UserService } from './user.service';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @MessagePattern({ command: CommandsUsuario.GET_USUARIO_LOGIN })
  async getUserLogin(user: string): Promise<User | null> {
    console.log('chegou no user: ', user);
    return await this.userService.getUserLogin(user);
  }

  @MessagePattern({ command: CommandsUsuario.USER_CREATE })
  async createUser(user: { email: string; name: string; password: string }) {
    console.log('aqui no create: ', user);
    return await this.userService.createUser(user);
  }
}
