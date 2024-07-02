import { Body, Controller, Delete, Get, Param, ParseIntPipe, Post, Put } from '@nestjs/common';
import { UsersService } from '../services/users.service';
import { CreateUserDto, UpdateUserDto } from '../dtos/user.dto';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('Users')
@Controller('users')
export class UsersController {
    constructor(private usersService: UsersService) { }

    @Get()
    getAll() {
        return this.usersService.findAll();
    }

    @Get(':userId')
    getById(@Param('userId', ParseIntPipe) userId: number) {
        return this.usersService.findOne(userId);
    }

    @Post()
    create(@Body() payload: CreateUserDto) {
        return this.usersService.create(payload)
    }

    @Put(':userId')
    update(@Param('userId', ParseIntPipe) userId: number, @Body() payload: UpdateUserDto) {
        return this.usersService.update(userId, payload);
    }

    @Delete(':userId')
    delete(@Param('userId', ParseIntPipe) userId: number) {
        return this.usersService.remove(userId);
    }
}
