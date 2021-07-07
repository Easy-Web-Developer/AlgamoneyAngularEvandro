import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lancamentos-pesquisa',
  templateUrl: './lancamentos-pesquisa.component.html',
  styleUrls: ['./lancamentos-pesquisa.component.css']
})
export class LancamentosPesquisaComponent {

  lancamentos = [
    { tipo: 'DESPESA', descricao: 'Compra de pão', dataVencimento: '30/06/2017',
      dataPagamento: null, valor: 4.55, pessoa: 'Padaria do Evandro'},
      { tipo: 'RECEITA', descricao: 'Compra de pão', dataVencimento: null,
      dataPagamento: '25/09/2021', valor: 4.55, pessoa: 'Padaria do José'},
      { tipo: 'RECEITA', descricao: 'Compra de pão', dataVencimento: '30/06/2017',
      dataPagamento: null, valor: 4.55, pessoa: 'Padaria do Pedro'},
      { tipo: 'DESPESA', descricao: 'Compra de pão', dataVencimento: '30/06/2017',
      dataPagamento: '01/02/2015', valor: 4.55, pessoa: 'Padaria do Bastiao'},
      { tipo: 'DESPESA', descricao: 'Compra de pão', dataVencimento: '30/06/2017',
      dataPagamento: '01/02/2015', valor: 4.55, pessoa: 'Padaria do Jorge'}
  ]

}
