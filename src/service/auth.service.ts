import {BadRequestException, Injectable, UnauthorizedException} from "@nestjs/common";
import {UsersService} from "./users.service";
import {UsersModel} from "../models/users.model";
import {JwtService} from "@nestjs/jwt";

@Injectable()
export class AuthService {

    constructor(
        private usersService: UsersService,
        private jwtService: JwtService
    ) {
    }

    signIn(payload: UsersModel): { access_token: string } {
        const user = this.usersService.findByName(payload.user_name);
        if (!user) {
            throw new BadRequestException("User doesn't exist");
        }
        if (user?.password !== payload.password) {
            throw new UnauthorizedException();
        }

        const response_payload = {
            sub: user.id,
            username: user.user_name
        }

        return {
            access_token: this.jwtService.sign(response_payload)
        }
    }

}