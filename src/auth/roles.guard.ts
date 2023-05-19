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
      'requiredRolesAndOwners',
      [context.getHandler(), context.getClass()],
    );

    if (requiredRoles) {
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
    } else if (requiredRolesAndOwners) {
      const { user, params } = context.switchToHttp().getRequest();

      const userWithId = await this.userService.findOne(user.id);

      if (!userWithId) {
        throw new HttpException('User not found', HttpStatus.NOT_FOUND);
      }

      if (userWithId.id == params.id) {
        return true;
      }

      if (!requiredRolesAndOwners.includes(userWithId.role as Role)) {
        throw new HttpException(
          `User doesn't have enough permissions`,
          HttpStatus.UNAUTHORIZED,
        );
      }

      return true;
    } else {
      return true;
    }
  }
}
