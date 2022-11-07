import { UsuarioEntity } from './usuario.entity';
import { UsuarioService } from './usuario.service';
export declare class UsuarioController {
    private readonly userService;
    constructor(userService: UsuarioService);
    getUser(data: any): Promise<UsuarioEntity>;
    greet(): Promise<string>;
    create(usuario: UsuarioEntity): Promise<import("typeorm").InsertResult>;
    healthCheck(): Promise<string>;
}
