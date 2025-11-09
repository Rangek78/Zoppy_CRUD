import { Repository } from 'typeorm';
import { ProdutoEntity } from './produto.entity';
import { Injectable } from '@nestjs/common';

@Injectable()
export class ProdutoRepository extends Repository<ProdutoEntity> {}
