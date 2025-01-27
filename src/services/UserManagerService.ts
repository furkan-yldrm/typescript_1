import { User } from "../models/User";

// Generics Class
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

}