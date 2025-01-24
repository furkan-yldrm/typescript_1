
export class User {
    private static idCounter: number = 1;

  private id: number;
  protected username: string;
  private password: string;
  private readonly role: string = "User"; 
  
  constructor(username: string, password: string) {
    this.id = User.idCounter++;
    this.username = username;
    this.password = password;
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