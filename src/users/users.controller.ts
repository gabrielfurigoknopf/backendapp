import {
    Body, Controller, Delete, Get, Post, Put, Param,
    ParseIntPipe
} from '@nestjs/common';
import { CreateUserDto } from 'src/dtos/create-user-dtos';
import { UsersRepository } from 'src/users/repository/users.repository';

@Controller('api/users')
export class UsersController {
    constructor(private readonly usersRepository: UsersRepository) { }
    @Get()
    async getAllUsers() {
        return {}
    }
    @Post()
    async createUser(@Body() body: CreateUserDto) {
        await this.usersRepository.createUser(body);
    }
    @Put(':id')
    async updateUser(@Param('id', ParseIntPipe) id: number,
        @Body() body: CreateUserDto) {
    }
    @Delete(':id')
    async deleteUser(@Param('id', ParseIntPipe) id: number) {
    }
}