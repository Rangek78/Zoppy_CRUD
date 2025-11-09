import { Routes } from '@angular/router';
import { DetalhaProdutoComponent } from './produto/detalha-produto.component';
import { NovoProdutoComponent } from './produto/novo-produto.component';
import { EditarProdutoComponent } from './produto/editar-produto.component';
import { ListaProdutoComponent } from './produto/lista-produto.component';

export const routes: Routes = [
  { path: '', component: ListaProdutoComponent },
  { path: 'detalhar/:id', component: DetalhaProdutoComponent },
  { path: 'novo', component: NovoProdutoComponent },
  { path: 'editar/:id', component: EditarProdutoComponent },
  { path: '**', redirectTo: '', pathMatch: 'full' },
];
