import { Injectable } from '@angular/core';  

import { Http, Headers } from '@angular/http';

import 'rxjs/add/operator/toPromise';

@Injectable()
export class CategoriaService {

  categoriasUrl = 'http://localhost:8080/categorias';

  constructor(private http: Http) { }

  listarTodas(): Promise<any> {
    const token = localStorage.getItem('token');
    const header = new Headers({
      'Content-Type': 'application/json',
       Authorization: `Bearer ${token}`
    });

    return this.http.get(this.categoriasUrl, { headers: header })
      .toPromise()
      .then(response => response.json());
  }
 
}
