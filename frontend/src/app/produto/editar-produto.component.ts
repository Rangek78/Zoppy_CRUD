import { Component, OnInit } from '@angular/core';
import { Produto } from '../models/produto';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { ProdutoService } from '../services/produto.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-editar-produto',
  imports: [FormsModule, CommonModule],
  templateUrl: './editar-produto.component.html',
  styleUrl: './editar-produto.component.css',
})
export class EditarProdutoComponent implements OnInit {
  // 4. Allow null type
  produto: Produto | null = null;

  constructor(
    private produtoService: ProdutoService,
    private activatedRoute: ActivatedRoute,
    private toastr: ToastrService,
    private router: Router
  ) {}

  ngOnInit() {
    const id = this.activatedRoute.snapshot.params['id'];
    this.produtoService.detail(id).subscribe({
      next: (data) => {
        this.produto = data;
      },
      error: (err) => {
        this.toastr.error(err.error.message, 'Fail', {
          timeOut: 3000,
          positionClass: 'toast-top-center',
        });
        this.router.navigate(['/']);
      },
    });
  }

  onUpdate(): void {
    const id = this.activatedRoute.snapshot.params['id'];
    this.produtoService.update(id, this.produto!).subscribe({
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
