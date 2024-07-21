import {BadRequestException, Injectable} from "@nestjs/common";
import {UsersModel} from "../models/users.model";
import {randomUUID} from "node:crypto";
import {hashSync} from "bcrypt";

@Injectable()
export class UsersService {

    // In memory data base.
    private readonly users: UsersModel[] = [];

    findOne(name: string): UsersModel | undefined {
        return this.users.find(user => user.user_name === name);
    }

    createOne(payload: UsersModel): UsersModel {
        let user = this.users.find(u => u.user_name === payload.user_name);
        if (user) {
            throw new BadRequestException("User name already taken");
        }
        user = {
            id: randomUUID(),
            user_name: payload.user_name,
            password: hashSync(payload.password, 10)
        };
        this.users.push(user);
        return user;
    }

}