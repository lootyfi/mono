import { SetMetadata } from '@nestjs/common';
import { UserRole } from '../user/model/user.model';

export const ROLE_KEY = 'role';

export const Role = (role: UserRole) => SetMetadata(ROLE_KEY, role);
