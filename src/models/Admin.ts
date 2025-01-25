import { User } from "./User";

export class Admin extends User {
    
    constructor(username:string, password:string){
        super(username, password);
    }

    public override getRole(): string {
        return "Admin";
    }
}