import { IsNotEmpty, IsNumber, Min } from 'class-validator';
import { IsNotBlank } from 'src/decorators/is-not-blank.decorator';

export class ProdutoDto {
  @IsNotBlank({ message: 'O nome do produto não pode estar vazio' })
  nome?: string;

  @IsNumber()
  @IsNotEmpty()
  @Min(10, { message: ' o preço não pode ser menor que R$ 10' })
  valor?: number;
}
