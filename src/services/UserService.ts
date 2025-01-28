import { User } from "../models/User";

export abstract class UserService{

    protected users: User[] = [];

    public abstract addUser(user: User): void;

    public listUsers(): User[]{ 
        return this.users;
    }

    public countUsers(): number{
        return this.users.length;
    }

    public removeUsers(): void{
        this.users = [];
    }
}