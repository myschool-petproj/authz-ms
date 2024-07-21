import {Body, Controller, HttpCode, HttpStatus, Post} from "@nestjs/common";
import {AuthService} from "../service/auth.service";
import {UsersModel} from "../models/users.model";

@Controller("auth")
export class AuthController {

    constructor(private readonly authService: AuthService) {
    }

    @HttpCode(HttpStatus.OK)
    @Post("token")
    async token(@Body() payload: UsersModel) {
        return this.authService.token(payload);
    }

    @HttpCode(HttpStatus.CREATED)
    @Post("signUp")
    async signUp(@Body() payload: UsersModel) {
        return this.authService.signUp(payload);
    }

}