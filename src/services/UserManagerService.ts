import { User } from "../models/User";

// Generics
export class UserManagerService<T extends User> {
  // User import
  private users: T[] = [];

  // Kullanıcı Ekle
  public addUser(user: T): void {
    this.users.push(user);
  }

  // Kullanıcıları Listele
  public listUsers(): T[] {
    return this.users;
  }

  public removeUser(user: T): void {
    const index = this.users.indexOf(user);
    this.users.splice(index, 1);
  }

  public removeUserById(userId: number): boolean{
    const user = this.users.findIndex((u) => u.getId() === userId);
    if(user != -1){
        this.users.splice(user, 1);
        return true;
    }
    return false;
  }

  public findUserByUsername(username: string): T | undefined{
    return this.users.find((u) => u.getUsername() === username); 
  }

  public findUserById(userId: number): T | undefined{
    return this.users.find((u) => u.getId() === userId); 
  }

}