import { Ilogin } from "../interfaces/Ilogin";
import { UserRole } from "../utils/UserRole";

export class User {
    private static idCounter: number = 1;

  private id: number;
  protected username: string;
  private password: string;
  private readonly role: UserRole = UserRole.User;
  private lastLogin: Date | null = null;
  
  constructor(username: string, password: string, role:UserRole=UserRole.User) {
    this.id = User.idCounter++;
    this.username = username;
    this.password = password;
    this.role = role;
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

  public setRole(newRole: UserRole): void {
    this.role = newRole;
  }

  specialPage(): void {
    if (UserRole.Admin === this.role) {
        console.log("Admin sayfasina hoşgeldiniz");
    } else if (UserRole.Moderator === this.role) {
        console.log("Moderator sayfaiına hoşgeldiniz");
    }
}

// Remember Me
loginUser(data: Ilogin): void {
    console.log(`User Logged In${data.username}`);
    if (data.rememberMe) {
        console.log("Remember Me özelliği ile kullaniciyi artik taniyorum");
    } else {
        console.log("");
    }
}

// Kullanıcı Bilgileri Göster
public displayUserInfo(): void {
    console.log(
        `User Info: User ID: ${this.id} - username: ${this.username} - Roles: ${this.role}`
    );
}
}