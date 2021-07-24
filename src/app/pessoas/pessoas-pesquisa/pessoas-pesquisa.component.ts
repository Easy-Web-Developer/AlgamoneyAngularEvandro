import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pessoas-pesquisa',
  templateUrl: './pessoas-pesquisa.component.html',
  styleUrls: ['./pessoas-pesquisa.component.css']
})
export class PessoasPesquisaComponent {

 pessoas = [
   {nome: 'Evandro Oliveira', cidade: 'Cascavel', estado: 'PR', status: 'Ativo'},
   {nome: 'João Silva', cidade: 'Mamborê', estado: 'SC', status: 'Inativo'},
   {nome: 'Maria Silva', cidade: 'Maringa', estado: 'SP', status: 'Ativo'},
   {nome: 'Pedro Paulo', cidade: 'Cianorte', estado: 'PR', status: 'Inativo'},
   {nome: 'Carla Souza', cidade: 'Cascavel', estado: 'SC', status: 'Inativo'},
   {nome: 'Luciana Pereira', cidade: 'Juranda', estado: 'SP', status: 'Ativo'},
   {nome: 'Aline Souza', cidade: 'Maringa', estado: 'MG', status: 'Inativo'},
   {nome: 'Vilmar Andrade', cidade: 'Cianorte', estado: 'MG', status: 'Ativo'},
   {nome: 'Manoel Oliveira', cidade: 'Maringa', estado: 'PR', status: 'Inativo'},
 ]

}
