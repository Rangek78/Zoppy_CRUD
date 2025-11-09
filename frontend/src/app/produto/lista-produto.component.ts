import { Component, OnInit } from '@angular/core';
import { Produto } from '../models/produto';
import { ProdutoService } from '../services/produto.service';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

import Swal from 'sweetalert2';

@Component({
  selector: 'app-lista-produto',
  imports: [CommonModule, RouterLink],
  templateUrl: './lista-produto.component.html',
  styleUrl: './lista-produto.component.css',
})
export class ListaProdutoComponent implements OnInit {
  produtos: Produto[] = [];

  listaVazia = undefined;

  constructor(private produtoService: ProdutoService) {}

  ngOnInit(): void {
    this.carregarProdutos();
  }

  carregarProdutos(): void {
    this.produtoService.lista().subscribe({
      next: (data: Produto[]) => {
        this.produtos = data;
        this.listaVazia = undefined;
      },
      error: (err: any) => {
        this.listaVazia = err.error.message;
      },
    });
  }

  excluir(id: number | undefined): void {
    if (id === undefined) {
      console.log('ID é undefined, não é possível excluir');
      return;
    }

    Swal.fire({
      title: 'Tem certeza?',
      text: 'Não é possível restaurar o produto após excluir',
      icon: 'warning',
      showCloseButton: true,
      showCancelButton: true,
      cancelButtonText: 'Não',
    }).then((result) => {
      if (result.value) {
        this.produtoService
          .delete(id)
          .subscribe((res) => this.carregarProdutos());
        Swal.fire('OK', 'Produto excluído', 'success');
      } else if (result.dismiss === Swal.DismissReason.cancel) {
        Swal.fire('Cancelado', 'Produto inalterado', 'error');
      }
    });
  }
}
