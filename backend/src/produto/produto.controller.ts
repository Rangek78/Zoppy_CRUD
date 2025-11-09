import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseIntPipe,
  Post,
  Put,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { ProdutoService } from './produto.service';
import { ProdutoDto } from './dto/produto.dto';

@Controller('produto')
export class ProdutoController {
  constructor(private readonly produtoService: ProdutoService) {}

  @Get()
  async getAll() {
    return await this.produtoService.getAll();
  }

  @Get(':id')
  async getOne(@Param('id', ParseIntPipe) id: number) {
    return await this.produtoService.findById(id);
  }

  @UsePipes(new ValidationPipe({ whitelist: true }))
  @Post()
  async create(@Body() dto: ProdutoDto) {
    return await this.produtoService.create(dto);
  }

  @UsePipes(new ValidationPipe({ whitelist: true }))
  @Put(':id')
  async update(@Param('id', ParseIntPipe) id: number, @Body() dto: ProdutoDto) {
    return await this.produtoService.update(id, dto);
  }

  @Delete(':id')
  async delete(@Param('id', ParseIntPipe) id: number) {
    return await this.produtoService.delete(id);
  }
}
