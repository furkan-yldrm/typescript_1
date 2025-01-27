import { User } from "../models/User";
import { IRegister } from "../interfaces/IRegister";
import { Ilogin } from "../interfaces/Ilogin";

export class AuthService {

    private users:User[] = [];

    public register(data:IRegister):string{
    if(data.password !== data.confirmPassword){
        return "Password and Confirm password do not match";
    }

    const user = new User(data.username,data.password);
    this.users.push(user);
    return `User registered successfully. ID: ${user.getId()}`;
    }

    public login(data:Ilogin):string{
    const user = this.users.find((u) => u.getUsername() === data.username);

    if(!user){
        return "User not found!"
    }

    if(!user.verifyPassword(data.password)){
        return "Incorrect password!"
    }

    return `Welcome ${user.getRole()} ${user.getUsername()}`; 
    } 

    public getUsers(): User[]{
        return this.users;
    }
} 