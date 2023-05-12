import {
  CanActivate,
  ExecutionContext,
  HttpException,
  HttpStatus,
  Injectable,
} from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { UserService } from 'src/user/user.service';
import { Role } from './role.enum';

@Injectable()
export class RolesGuard implements CanActivate {
  constructor(private reflector: Reflector, private userService: UserService) {}

  async canActivate(context: ExecutionContext): Promise<boolean> {
    const requiredRoles = this.reflector.getAllAndOverride<Role[]>('roles', [
      context.getHandler(),
      context.getClass(),
    ]);

    const requiredRolesAndOwners = this.reflector.getAllAndOverride<Role[]>(
      'rolesAndOwners',
      [context.getHandler(), context.getClass()],
    );

    if (!requiredRoles) {
      return true;
    }

    if (!requiredRolesAndOwners) {
      return true;
    }

    const { user } = context.switchToHttp().getRequest();

    const userWithId = await this.userService.findOne(user.id);

    if (!userWithId) {
      throw new HttpException('User not found', HttpStatus.NOT_FOUND);
    }

    if (!requiredRoles.includes(userWithId.role as Role)) {
      throw new HttpException(
        `User doesn't have enough permissions`,
        HttpStatus.UNAUTHORIZED,
      );
    }

    return true;
  }
}
