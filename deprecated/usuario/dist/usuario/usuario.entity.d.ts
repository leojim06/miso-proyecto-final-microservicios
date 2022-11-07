import { UserInterface } from './user.interface';
export declare class UsuarioEntity implements UserInterface {
    id: number;
    username: string;
    password: string;
    name: string;
    email: string;
    createdAt: Date;
    hashPassword(): Promise<void>;
}
