import { Injectable } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';

@Injectable()
export class UsersService {
    constructor(private prisma: PrismaClient)
    {
        prisma = new PrismaClient();
    }

    async createUser( data: 
        { name: string; email: string },
    ): Promise<User | null> {
        return this.prisma.user.create({
            data,
        });
    }
}
