import {Body, Controller, HttpCode, HttpStatus, Post} from "@nestjs/common";
import {AuthService} from "../service/auth.service";
import {UsersModel} from "../models/users.model";

@Controller("auth")
export class AuthController {

    constructor(private readonly authService: AuthService) {
    }

    @HttpCode(HttpStatus.OK)
    @Post("login")
    signIn(@Body() payload: UsersModel) {
        return this.authService.signIn(payload);
    }

}