import { Controller, Get, Post } from '@nestjs/common';

@Controller('cats')
export class CatsController {
    @Post()
    create(): string {
        return 'this action adds a new cat';
    }

    @Get()
    findAll(): string {
        return 'this action returns all cats';
    }

    @Get('a/')
    findOne(): string {
        return ('this route is different');
    }
}
