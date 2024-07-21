import {IsNotEmpty, IsString} from "class-validator";

//investigate RBAC
export class UsersModel {

    id: string;

    @IsString()
    @IsNotEmpty()
    user_name: string;

    @IsString()
    @IsNotEmpty()
    password: string;
}