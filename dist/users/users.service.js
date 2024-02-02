"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UsersService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const users_entity_1 = require("./users.entity");
const typeorm_2 = require("typeorm");
const profile_entity_1 = require("./profile.entity");
let UsersService = class UsersService {
    constructor(userRepository, profileRepository) {
        this.userRepository = userRepository;
        this.profileRepository = profileRepository;
    }
    async createUser(user) {
        const userFound = await this.userRepository.findOne({
            where: {
                username: user.username,
            },
        });
        if (userFound) {
            return new common_1.HttpException('El usuario ya existe', common_1.HttpStatus.CONFLICT);
        }
        const newUser = this.userRepository.create(user);
        return this.userRepository.save(newUser);
    }
    getUsers() {
        return this.userRepository.find();
    }
    async getUser(id) {
        const userFound = await this.userRepository.findOne({
            where: {
                id,
            },
        });
        if (!userFound) {
            return new common_1.HttpException('El usuario no existe', common_1.HttpStatus.NOT_FOUND);
        }
        return userFound;
    }
    async deleteUser(id) {
        const result = await this.userRepository.delete({ id });
        if (result.affected === 0) {
            return new common_1.HttpException('El usuario no existe', common_1.HttpStatus.NOT_FOUND);
        }
        return result;
    }
    async updateUser(id, user) {
        const userFound = await this.userRepository.findOne({
            where: {
                id
            }
        });
        if (!userFound) {
            return new common_1.HttpException('El usuario no existe', common_1.HttpStatus.NOT_FOUND);
        }
        const updateUser = Object.assign(userFound, user);
        return this.userRepository.save(updateUser);
    }
    async createProfile(id, profile) {
        const userFound = await this.userRepository.findOne({
            where: {
                id,
            },
        });
        if (!userFound) {
            return new common_1.HttpException('Usuario no encontrado', common_1.HttpStatus.NOT_FOUND);
        }
        const newProfile = this.profileRepository.create(profile);
        const savedProfile = await this.profileRepository.save(newProfile);
        userFound.profile = savedProfile;
        return this.userRepository.save(userFound);
    }
};
exports.UsersService = UsersService;
exports.UsersService = UsersService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(users_entity_1.User)),
    __param(1, (0, typeorm_1.InjectRepository)(profile_entity_1.Profile)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        typeorm_2.Repository])
], UsersService);
//# sourceMappingURL=users.service.js.map