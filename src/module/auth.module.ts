import {Module} from "@nestjs/common";
import {UsersModule} from "./users.module";
import {AuthService} from "../service/auth.service";
import {AuthController} from "../controller/auth.controller";
import {JwtModule} from "@nestjs/jwt";
import {ConfigModule} from "@nestjs/config";

@Module({
    imports: [
        ConfigModule.forRoot(),
        UsersModule,
        JwtModule.register({
            global: true,
            secret: process.env.JWT_SECRET,
            signOptions: {expiresIn: "1h"}
        })
    ],
    providers: [AuthService],
    controllers: [AuthController],
    exports: [AuthModule]
})
export class AuthModule {
}