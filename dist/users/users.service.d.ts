import { HttpException } from '@nestjs/common';
import { User } from './users.entity';
import { Repository } from 'typeorm';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { createProfileDto } from './dto/create-profile.dto';
import { Profile } from './profile.entity';
export declare class UsersService {
    private userRepository;
    private profileRepository;
    constructor(userRepository: Repository<User>, profileRepository: Repository<Profile>);
    createUser(user: CreateUserDto): Promise<User | HttpException>;
    getUsers(): Promise<User[]>;
    getUser(id: number): Promise<User | HttpException>;
    deleteUser(id: number): Promise<HttpException | import("typeorm").DeleteResult>;
    updateUser(id: number, user: UpdateUserDto): Promise<HttpException | (User & UpdateUserDto)>;
    createProfile(id: number, profile: createProfileDto): Promise<User | HttpException>;
}
