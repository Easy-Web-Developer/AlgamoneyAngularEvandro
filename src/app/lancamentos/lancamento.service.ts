import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { URLSearchParams } from '@angular/http';

import 'rxjs/add/operator/toPromise';
import * as moment from 'moment';

import { Lancamento } from 'app/core/model';
import { AuthService } from 'app/seguranca/auth.service';

export class LancamentoFiltro {
  descricao: string;
  dataVencimentoInicio: Date;
  dataVencimentoFim: Date;
  pagina = 0;
  itensPorPagina = 5;
}

@Injectable()
export class LancamentoService {

  lancamentosUrl = 'http://localhost:8080/lancamentos';

  constructor(private http: Http) {}

  pesquisar(filtro: LancamentoFiltro): Promise<any> {
    const params = new URLSearchParams;
    
    const token = localStorage.getItem('token');
    const header = new Headers({
      'Content-Type': 'application/json',
       Authorization: `Bearer ${token}`
    });
    
    params.set('page', filtro.pagina.toString());
    params.set('size', filtro.itensPorPagina.toString());


    if (filtro.descricao) {
      params.set('descricao', filtro.descricao);
    }

    if (filtro.dataVencimentoInicio) {
      params.set('dataVencimentoDe',
        moment(filtro.dataVencimentoInicio).format('YYYY-MM-DD'));
    }

    if (filtro.dataVencimentoFim) {
      params.set('dataVencimentoAte',
        moment(filtro.dataVencimentoFim).format('YYYY-MM-DD'));
    }

    return this.http.get(`${this.lancamentosUrl}?resumo`,
      { search: params, headers: header })
      .toPromise()
      .then(response => {
        const responseJson = response.json();
        const lancamentos = responseJson.content;

        const resultado = {
          lancamentos: lancamentos,
          total: responseJson.totalElements
        };
        
        return resultado;
      })
  }
  

  excluir(codigo: number): Promise<void> {
    const token = localStorage.getItem('token');
    const header = new Headers({
      'Content-Type': 'application/json',
       Authorization: `Bearer ${token}`
    });

    return this.http.delete(`${this.lancamentosUrl}/${codigo}`, { headers: header })
      .toPromise()
      .then(() => null);
  }

  adicionar(lancamento: Lancamento): Promise<Lancamento>{
    const token = localStorage.getItem('token');
    const header = new Headers({
      'Content-Type': 'application/json',
       Authorization: `Bearer ${token}`
    });

    return this.http.post(this.lancamentosUrl,
        JSON.stringify(lancamento), { headers: header })
      .toPromise()
      .then(response => response.json()); 
  } 

  atualizar(lancamento: Lancamento): Promise<Lancamento> {
    const token = localStorage.getItem('token');
    const header = new Headers({
      'Content-Type': 'application/json',
       Authorization: `Bearer ${token}`
    });

    return this.http.put(`${this.lancamentosUrl}/${lancamento.codigo}`,
      JSON.stringify(lancamento), { headers: header })
     .toPromise()
     .then(Response => {
       const lancamentoAlterado = Response.json() as Lancamento;

       this.converterStringParaDatas([lancamentoAlterado]);

       return lancamentoAlterado;
     }); 
  }

  buscarPorCodigo(codigo: number): Promise<Lancamento>{
    const token = localStorage.getItem('token');
    const header = new Headers({
      'Content-Type': 'application/json',
       Authorization: `Bearer ${token}`
    });

    return this.http.get(`${this.lancamentosUrl}/${codigo}`, { headers: header })
      .toPromise()
      .then(response => {
        const lancamento = response.json() as Lancamento;

        this.converterStringParaDatas([lancamento]);

        return lancamento;
      })
  }

  private converterStringParaDatas(lancamentos: Lancamento[]){
    for (const lancamento of lancamentos) {
      lancamento.dataVencimento = moment(lancamento.dataVencimento,
        'YYYY-MM-DD').toDate();

      if (lancamento.dataPagamento) {
        lancamento.dataPagamento = moment(lancamento.dataPagamento,
          'YYYY-MM-DD').toDate();
      }  
    }

  }

}

