import {BadRequestException, Injectable, UnauthorizedException} from "@nestjs/common";
import {UsersService} from "./users.service";
import {UsersModel} from "../models/users.model";

@Injectable()
export class AuthService {

    constructor(private usersService: UsersService) {
    }

    signIn(payload: UsersModel) {
        const user = this.usersService.findByName(payload.user_name);
        if (!user) {
            throw new BadRequestException("User doesn't exist");
        }
        if (user?.password !== payload.password) {
            throw new UnauthorizedException();
        }

        // use bcrypt to hash password
        const {password, ...result} = user;
        // TODO: generate JWT here and return instead of actual user
        return result;
    }

}