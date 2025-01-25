import { Ilogin } from "./Ilogin";

export interface IRegister extends Ilogin {
    confirmPassword:string;
}