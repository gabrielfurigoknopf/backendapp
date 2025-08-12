import { CreateUserDto } from "src/dtos/create-user-dtos";
export abstract class UsersRepository {
abstract createUser(dto: CreateUserDto): Promise<void>;
abstract getAllUsers(): Promise<CreateUserDto[]>;
abstract updateUser(id:number, dto: CreateUserDto): Promise<void>;
abstract deleteUser(id:number): Promise<void>;
}