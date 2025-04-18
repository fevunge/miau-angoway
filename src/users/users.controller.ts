import { Controller } from '@nestjs/common';
import { UsersService } from './users.service';
import { User } from '@prisma/client';

@Controller('users')
export class UsersController {
    constructor( private readonly userService: UsersService, )

    @Post('user')
    async signUpUser(
        @Body() userData: {name?: string; email; string},
    ): Promise<User> {
        return this.userService.createUser(userData);
    }
}
