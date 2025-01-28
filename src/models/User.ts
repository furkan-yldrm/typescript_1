import { UserRole } from "../utils/UserRole";

export class User {
    private static idCounter: number = 1;

  private id: number;
  protected username: string;
  private password: string;
  private readonly role: string = UserRole;
  private lastLogin: Date | null = null;
  
  constructor(username: string, password: string, role:UserRole=UserRole.User) {
    this.id = User.idCounter++;
    this.username = username;
    this.password = password;
  } 

  public updateLastLogin(): void {
    this.lastLogin = new Date();
}

public getLastLogin(): Date | null {
    return this.lastLogin;
}
  
  public getId(): number {
    return this.id;
  }

  public getUsername(): string {
    return this.username;
  }

  public verifyPassword(password: string): boolean {
    return this.password === password;
  }

  public getRole(): string {
    return this.role;
  }
}