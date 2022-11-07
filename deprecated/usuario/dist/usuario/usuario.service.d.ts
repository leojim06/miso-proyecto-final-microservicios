import { FindOneOptions, InsertResult, Repository } from 'typeorm';
import { UsuarioEntity } from './usuario.entity';
export declare class UsuarioService {
    private readonly usuarioEntityRepository;
    constructor(usuarioEntityRepository: Repository<UsuarioEntity>);
    findOne(query: FindOneOptions<UsuarioEntity>): Promise<UsuarioEntity>;
    createUsuarioEntity(UsuarioEntity: any): Promise<InsertResult>;
}
