import {Injectable} from "@nestjs/common";
import {UsersModel} from "../models/users.model";

@Injectable()
export class UsersService {

    private readonly users: UsersModel[] = [
        {
            id: 1,
            user_name: "Foo",
            password: "changeme"
        },
        {
            id: 2,
            user_name: "Bar",
            password: "Baz"
        }
    ];

    findByName(name: string): UsersModel | undefined {
        return this.users.find(user => user.user_name === name);
    }

}