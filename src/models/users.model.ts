import {IsNotEmpty, IsString} from "class-validator";

export class UsersModel {

    id: number;

    @IsString()
    @IsNotEmpty()
    user_name: string;

    @IsString()
    @IsNotEmpty()
    password: string;
}