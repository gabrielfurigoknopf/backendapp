import {
    Body, Controller, Delete, Get, Post, Put, Param,
    ParseIntPipe
} from '@nestjs/common';
import { CreateUserDto } from 'src/dtos/create-user-dtos';
@Controller('api/users')
export class UsersController {
    constructor(
    ) { }
    @Get()
    async getAllUsers() {
        return {}
    }
    @Post()
    async createUser(@Body() body: CreateUserDto) {
    }
    @Put(':id')
    async updateUser(@Param('id', ParseIntPipe) id: number,
        @Body() body: CreateUserDto) {
    }
    @Delete(':id')
    async deleteUser(@Param('id', ParseIntPipe) id: number) {
    }
}