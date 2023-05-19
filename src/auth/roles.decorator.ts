import { SetMetadata } from '@nestjs/common';
import { Role } from './role.enum';

export const Roles = (...roles: Role[]) => SetMetadata('roles', roles);
export const RolesAndOwner = (...roles: Role[]) =>
  SetMetadata('requiredRolesAndOwners', roles);
