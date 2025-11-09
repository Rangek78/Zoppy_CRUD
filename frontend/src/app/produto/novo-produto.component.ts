import { Component, OnInit } from '@angular/core';
import { ProdutoService } from '../services/produto.service';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
import { Produto } from '../models/produto';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-novo-produto',
  imports: [FormsModule],
  templateUrl: './novo-produto.component.html',
  styleUrl: './novo-produto.component.css',
})
export class NovoProdutoComponent implements OnInit {
  nome = '';
  valor: number | null = null;

  constructor(
    private produtoService: ProdutoService,
    private toastr: ToastrService,
    private router: Router
  ) {}

  ngOnInit() {}

  onCreate(): void {
    if (this.valor === null || this.nome === '') {
      this.toastr.error('Nome e Valor são obrigatórios', 'Fail');
      return;
    }
    const produto = new Produto(this.nome, this.valor!);
    this.produtoService.save(produto).subscribe({
      next: (data) => {
        this.toastr.success(data.message, 'OK', {
          timeOut: 3000,
          positionClass: 'toast-top-center',
        });
        this.router.navigate(['/']);
      },
      error: (err) => {
        this.toastr.error(err.error.message, 'Fail', {
          timeOut: 3000,
          positionClass: 'toast-top-center',
        });
      },
    });
  }

  voltar(): void {
    this.router.navigate(['/']);
  }
}
