import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';

@Injectable()
export class LancamentoService {

  lancamentosUrl = 'http://localhost:8080/lancamentos';

  constructor(private http: Http) { }

  pesquisar(): Promise<any> {
    
    const headers = new Headers();
    headers.append('Authorization', 'Basic YW5ndWxhcjpAbmd1bEByMA==');
   
    return this.http.get(`${this.lancamentosUrl}?resumo`)
      .toPromise()
      .then(response => response.json())
      

    // .toPromise()
    // .then(response => {
    //   console.log(response.json());
    // })
   
    }
  }
  

