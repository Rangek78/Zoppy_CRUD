import { Component, OnInit } from '@angular/core';
import { Produto } from '../models/produto';
import { ProdutoService } from '../services/produto.service';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-detalha-produto',
  imports: [CommonModule],
  templateUrl: './detalha-produto.component.html',
  styleUrl: './detalha-produto.component.css',
})
export class DetalhaProdutoComponent implements OnInit {
  produto: Produto | null = null;

  constructor(
    private produtoService: ProdutoService,
    private activatedRoute: ActivatedRoute,
    private toastr: ToastrService,
    private router: Router
  ) {}

  ngOnInit(): void {
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
        this.voltar();
      },
    });
  }

  voltar(): void {
    this.router.navigate(['/']);
  }
}
