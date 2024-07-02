import { Injectable, NotFoundException } from '@nestjs/common';
import { User } from '../entities/user.entity';
import { CreateUserDto, UpdateUserDto } from '../dtos/user.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { FindOneOptions } from 'typeorm';
@Injectable()
export class UsersService {

    constructor(@InjectRepository(User) private readonly userRepository: Repository<User>) { }

    findAll() {
        return this.userRepository.find();
    }
    async findOne(id: number) {
        const user = await this.userRepository.findOne({ where: { id: id } });

        if (!user) {
            throw new NotFoundException("Not found");

        }
        return user;

    }
    create(data: CreateUserDto) {
        const newUser = this.userRepository.create(data);
        return this.userRepository.save(newUser);
    }
    async update(id: number, changes: UpdateUserDto) {
        const user = await this.findOne(id);
        this.userRepository.merge(user, changes);
        return this.userRepository.save(user);
    }
    remove(id: number) {
        return this.userRepository.delete(id);
    }
}
