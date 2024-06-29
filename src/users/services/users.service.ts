import { Injectable, NotFoundException } from '@nestjs/common';
import { User } from '../entities/user.entity';
import { CreateUserDto, UpdateUserDto } from '../dtos/user.dto';
@Injectable()
export class UsersService {
    private counterId = 1;
    private users: User[] = [
        {
            id: 1,
            name: "Abdel",
            edad: 18,
            email: "abdel@email.com"
        }
    ]
    getAll() {
        return this.users;
    }

    getUserById(id: number) {
        const user = this.users.find((item) => item.id === id)
        if (!user) {
            throw new NotFoundException(`User with id:${id} not found`);
        }
        return user;
    }

    create(payload: CreateUserDto) {
        this.counterId = this.counterId + 1;
        const newUser = {
            id: this.counterId,
            ...payload
        }
        this.users.push(newUser)
        return newUser;
    }

    update(id: number, payload: UpdateUserDto) {
        const user = this.getUserById(id);
        const index = this.users.findIndex((item) => item.id === id)
        this.users[index] = {
            ...user,
            ...payload
        }
        return this.users[index];
    }

    delete(id: number) {
        const index = this.users.findIndex((item) => item.id === id);
        if (index === -1) {
            throw new NotFoundException(`User whit id:${id} not found`);
        }
        this.users.splice(index, 1);
        return true;
    }
}
