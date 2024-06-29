export class CreateUserDto {
    readonly name: string;
    readonly edad: number;
    readonly email: string;
}

export class UpdateUserDto {
    readonly name?: string;
    readonly edad?: number;
    readonly email?: string;
}