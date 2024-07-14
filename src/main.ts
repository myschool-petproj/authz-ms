import dotenv from "dotenv"
import {NestFactory} from "@nestjs/core";
import * as process from "node:process";
import {AuthModule} from "./module/auth.module";
import {ValidationPipe} from "@nestjs/common";

dotenv.config();
const PORT = process.env.APP_PORT;

NestFactory.create(AuthModule).then(app => {
    app.useGlobalPipes(new ValidationPipe());
    app.listen(PORT).then(() => {
        console.log(`App listening port: ${PORT}`);
    }).catch(err => {
        console.log(`Unable to start app with err: ${err}`);
    });
});