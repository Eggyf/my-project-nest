import { Body, Controller, Get, Post } from '@nestjs/common';
import { UsersService } from '../services/users.service';
import { CreateUserDto } from '../dtos/user.dto';

@Controller('users')
export class UsersController {
    constructor(private usersService: UsersService) { }

    @Get()
    getAll() {
        return this.usersService.getAll();
    }

    @Post()
    create(@Body() payload: CreateUserDto) {
        return this.usersService.create(payload)
    }
}
