import {BadRequestException, Injectable, UnauthorizedException} from "@nestjs/common";
import {UsersService} from "./users.service";
import {UsersModel} from "../models/users.model";
import {JwtService} from "@nestjs/jwt";
import {compareSync} from "bcrypt";

@Injectable()
export class AuthService {

    constructor(
        private usersService: UsersService,
        private jwtService: JwtService
    ) {
    }

    /**
     * Retrieve bearer token.
     * @param payload
     */
    token(payload: UsersModel): { access_token: string } {
        const user = this.usersService.findOne(payload.user_name);
        if (!user) {
            throw new BadRequestException("User doesn't exist");
        }
        if (!compareSync(payload.password, user.password)) {
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

    /**
     * Register user.
     * @param payload
     */
    signUp(payload: UsersModel): UsersModel {
        return this.usersService.createOne(payload);
    }

    /**
     * Use for login from ui.
     * Should redirect to page passed in header, or to be investigated.
     */
    signIn() {

    }

}