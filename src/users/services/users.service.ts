import { Injectable } from '@nestjs/common';
import { User } from '../entities/user.entity';
import { CreateUserDto } from '../dtos/user.dto';
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

    create(payload: CreateUserDto) {
        this.counterId = this.counterId + 1;
        const newUser = {
            id: this.counterId,
            ...payload
        }
        this.users.push(newUser)
        return newUser;
    }
}
