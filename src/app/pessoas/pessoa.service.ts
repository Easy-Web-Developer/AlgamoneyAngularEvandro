import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { URLSearchParams } from '@angular/http';
import { Pessoa } from 'app/core/model';

import 'rxjs/add/operator/toPromise';

export class PessoaFiltro{
  nome: string;  
  pagina = 0;
  itensPorPagina = 5;
}

@Injectable()
export class PessoaService {

  pessoasUrl = 'http://localhost:8080/pessoas';

  constructor(private http: Http) { }

  pesquisar(filtro: PessoaFiltro): Promise<any> {
    const params = new URLSearchParams;
    const token = localStorage.getItem('token');
    const header = new Headers({
      'Content-Type': 'application/json',
       Authorization: `Bearer ${token}`
    });

    params.set('page', filtro.pagina.toString());
    params.set('size', filtro.itensPorPagina.toString());

    if (filtro.nome) {
      params.set('nome', filtro.nome);
    }

    return this.http.get(`${this.pessoasUrl}`, 
        { search: params, headers: header })
      .toPromise()
      .then(response => {
        const responseJson = response.json();
        const pessoas = responseJson.content;

        const resultado = {
          pessoas : pessoas,
          total: responseJson.totalElements
        };

        return resultado;
      })

  }


  excluir(codigo: number): Promise<void>{
    const token = localStorage.getItem('token');
    const header = new Headers({
      'Content-Type': 'application/json',
       Authorization: `Bearer ${token}`
    });

    return this.http.delete(`${this.pessoasUrl}/${codigo}`, {headers: header})
      .toPromise()
      .then(() => null);
  }


  listarTodas(): Promise<any> {
    const token = localStorage.getItem('token');
    const header = new Headers({
      'Content-Type': 'application/json',
       Authorization: `Bearer ${token}`
    });

    return this.http.get(this.pessoasUrl, { headers: header })
      .toPromise()
      .then(response => response.json().content);
  }


  mudarStatus(codigo:number, ativo:boolean):Promise<void>{
    const token = localStorage.getItem('token');
    const header = new Headers({
      'Content-Type': 'application/json',
       Authorization: `Bearer ${token}`
    });

    return this.http.put(`${this.pessoasUrl}/${codigo}/ativo`, ativo, { headers: header })
    .toPromise()
    .then(() => null);
  }


  adicionar(pessoa: Pessoa): Promise<Pessoa>{
    const token = localStorage.getItem('token');
    const header = new Headers({
      'Content-Type': 'application/json',
       Authorization: `Bearer ${token}`
    });

    return this.http.post(this.pessoasUrl,
        JSON.stringify(pessoa), { headers: header })
     .toPromise()
     .then(response => response.json());   
  }

  atualizar(pessoa: Pessoa): Promise<Pessoa>{
    const token = localStorage.getItem('token');
    const header = new Headers({
      'Content-Type': 'application/json',
       Authorization: `Bearer ${token}`
    });

    return this.http.put(`${this.pessoasUrl}/${pessoa.codigo}`,
      JSON.stringify(pessoa), { headers: header })
     .toPromise()
     .then(response => {
       const pessoaAlterada = response.json() as Pessoa;

       return pessoaAlterada;
     });
  }

  buscarPorCodigo(codigo: number): Promise<Pessoa>{
    const token = localStorage.getItem('token');
    const header = new Headers({
      'Content-Type': 'application/json',
       Authorization: `Bearer ${token}`
    });

    return this.http.get(`${this.pessoasUrl}/${codigo}`, { headers: header })
      .toPromise()
      .then(response => {
        const pessoa = response.json() as Pessoa;

        return pessoa;
      })
  }

}
