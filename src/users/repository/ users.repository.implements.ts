import { UsersRepository } from "./users.repository";
import { Injectable } from "@nestjs/common";
import { PrismaService } from "src/database/prisma.service";
import { CreateUserDto } from "src/dtos/create-user-dtos";

@Injectable()
export class UsersRepositoryImplements 
implements UsersRepository {

    constructor(private prisma: PrismaService) {}

 async createUser(dto: CreateUserDto): Promise<void> {
    await this.prisma.user.create({
        data: {
            name: dto.name,
            email: dto.email
        }   
    });
    return;
 }
 getAllUsers(): Promise<CreateUserDto[]> {
 throw new Error("Method not implemented.");
 }
 updateUser(id: number, dto: CreateUserDto): Promise<void> {
 throw new Error("Method not implemented.");
 }
 deleteUser(id: number): Promise<void> {
 throw new Error("Method not implemented.");
 }
}