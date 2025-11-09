import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ProdutoEntity } from './produto.entity';
import { Repository } from 'typeorm';
import { ProdutoDto } from './dto/produto.dto';
import { MessageDto } from 'src/common/message.dto';

@Injectable()
export class ProdutoService {
  constructor(
    @InjectRepository(ProdutoEntity)
    private produtoRepository: Repository<ProdutoEntity>,
  ) {}

  async getAll(): Promise<ProdutoEntity[]> {
    const list = await this.produtoRepository.find();
    if (!list.length) {
      throw new NotFoundException(new MessageDto('A lista está vazia'));
    }
    return list;
  }

  async findById(id: number): Promise<ProdutoEntity> {
    const produto = await this.produtoRepository.findOneBy({ id: id });
    if (!produto) {
      throw new NotFoundException(new MessageDto('O produto não existe'));
    }
    return produto;
  }
  async findByName(nome: string): Promise<ProdutoEntity> {
    const produto = await this.produtoRepository.findOneBy({ nome: nome });
    return produto;
  }

  async create(dto: ProdutoDto): Promise<any> {
    const existe = await this.findByName(dto.nome);
    if (existe)
      throw new BadRequestException(
        new MessageDto('O nome do produto já está sendo utilizado'),
      );
    const produto = this.produtoRepository.create(dto);
    await this.produtoRepository.save(produto);
    return new MessageDto(`Produto ${produto.nome} criado`);
  }

  async update(id: number, dto: ProdutoDto): Promise<any> {
    const produto = await this.findById(id);
    if (!produto)
      throw new NotFoundException(new MessageDto('O produto não existe'));
    const existe = await this.findByName(dto.nome);
    if (existe && existe.id !== id)
      throw new BadRequestException(
        new MessageDto('O nome do produto já está sendo utilizado'),
      );
    produto.nome = dto.nome ? dto.nome : produto.nome;
    produto.valorDeCompra = dto.valorDeCompra
      ? dto.valorDeCompra
      : produto.valorDeCompra;
    produto.valorDeVenda = dto.valorDeVenda
      ? dto.valorDeVenda
      : produto.valorDeVenda;
    produto.observacoes = dto.observacoes
      ? dto.observacoes
      : produto.observacoes;
    await this.produtoRepository.save(produto);
    return new MessageDto(`Produto ${produto.nome} atualizado`);
  }

  async delete(id: number): Promise<any> {
    const produto = await this.findById(id);
    await this.produtoRepository.delete(produto);
    return new MessageDto(`Produto ${produto.nome} excluído`);
  }
}
