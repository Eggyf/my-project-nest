import { IsEmail, IsNumber, IsString } from "class-validator";
import { PartialType } from "@nestjs/swagger";

export class CreateUserDto {



    @IsString()
    readonly name: string;
    @IsNumber()
    readonly edad: number;

    @IsEmail()
    readonly email: string;
}

export class UpdateUserDto extends PartialType(CreateUserDto) { }