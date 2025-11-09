import { IsNotEmpty, IsNumber, MaxLength, Min } from 'class-validator';
import { IsNotBlank } from 'src/decorators/is-not-blank.decorator';

export class ProdutoDto {
  @IsNotBlank({ message: 'O nome do produto não pode estar vazio' })
  @MaxLength(30, {
    message: 'O nome do produto não pode exceder 30 caracteres',
  })
  nome?: string;

  @IsNumber()
  @IsNotEmpty()
  @Min(0, { message: ' o valor de compra não pode ser menor que R$ 0' })
  valorDeCompra?: number;

  @IsNumber()
  @IsNotEmpty()
  @Min(10, { message: ' o preço para venda não pode ser menor que R$ 10' })
  valorDeVenda?: number;

  @IsNotBlank({ message: ' a observação não pode estar vazia' })
  @MaxLength(50, {
    message: ' a observação não pode exceder 50 caracteres',
  })
  observacoes?: string;
}
