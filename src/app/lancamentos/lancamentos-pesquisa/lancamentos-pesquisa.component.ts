import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lancamentos-pesquisa',
  templateUrl: './lancamentos-pesquisa.component.html',
  styleUrls: ['./lancamentos-pesquisa.component.css']
})
export class LancamentosPesquisaComponent {

  lancamentos = [
    { tipo: 'DESPESA', descricao: 'Compra de pão', dataVencimento: new Date(2021,7,20),
      dataPagamento: null, valor: 4.55, pessoa: 'Padaria do Evandro'},
      { tipo: 'RECEITA', descricao: 'Compra de pão', dataVencimento: null,
      dataPagamento: new Date(2021,7,20), valor: 80000, pessoa: 'Padaria do José'},
      { tipo: 'RECEITA', descricao: 'Compra de pão', dataVencimento: new Date(2019,1,20),
      dataPagamento: null, valor: 4.55, pessoa: 'Padaria do Pedro'},
      { tipo: 'DESPESA', descricao: 'Compra de pão', dataVencimento: new Date(2020,5,20),
      dataPagamento: new Date(2021,7,24), valor: 800, pessoa: 'Padaria do Bastiao'},
      { tipo: 'DESPESA', descricao: 'Compra de pão', dataVencimento: new Date(2021,7,24),
      dataPagamento: new Date(2021,7,20), valor: 1750, pessoa: 'Padaria do Jorge'}
  ]

}
