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
  @Min(10, { message: ' o preço não pode ser menor que R$ 10' })
  valor?: number;
}
