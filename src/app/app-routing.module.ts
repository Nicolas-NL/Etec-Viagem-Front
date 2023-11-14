import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CadastroViagemComponent } from './cadastro-viagem/cadastro-viagem.component';
import { ListagemViagemComponent } from './listagem-viagem/listagem-viagem.component';
import { DetalhesViagemComponent } from './detalhes-viagem/detalhes-viagem.component';
import { ExclusaoViagemComponent } from './exclusao-viagem/exclusao-viagem.component';

const routes: Routes = [
  {path: 'cadastro-viagem', component: CadastroViagemComponent},
  {path: 'listagem-viagem', component: ListagemViagemComponent},
  {path: 'detalhes-viagem', component: DetalhesViagemComponent}, 
  {path: 'exclusao-viagem', component: ExclusaoViagemComponent},
  {path: '', redirectTo:'/listagem-viagem', pathMatch:'full'},
];

@NgModule({
  declarations: [],
  exports: [RouterModule],
  imports: [RouterModule.forRoot(routes)]
})
export class AppRoutingModule { }
