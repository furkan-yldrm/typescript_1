import { UserRole } from "../utils/UserRole";
import { User } from "./User";

export class Admin extends User {
    
    constructor(username:string, password:string){
        super(username, password, UserRole.Admin);
    }

    public override getRole(): string {
        return UserRole.Admin;
    }

    public viewAllUsers(): string {
        return "Admins are listed";
    }

    public checkAccess(user:User){
        if(user.getRole() === UserRole.Admin){
            console.log("Admin erişimi verildi");
          return true;
        } else {
            console.log("Admin erişimi verilmedi");
            return false;
        }
      }
}