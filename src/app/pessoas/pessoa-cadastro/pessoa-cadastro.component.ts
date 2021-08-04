import { ActivatedRoute } from '@angular/router';
import { ErrorHandlerService } from 'app/core/error-handler.service';
import { ToastyService } from 'ng2-toasty';
import { PessoaService } from './../pessoa.service';
import { FormControl } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { Pessoa } from 'app/core/model';

@Component({
  selector: 'app-pessoa-cadastro',
  templateUrl: './pessoa-cadastro.component.html',
  styleUrls: ['./pessoa-cadastro.component.css']
})
export class PessoaCadastroComponent implements OnInit {

  pessoa = new Pessoa();

  constructor(
    private pessoaService: PessoaService,
    private toasty: ToastyService,
    private errorHandler: ErrorHandlerService,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    const codigoPessoa = this.route.snapshot.params['codigo'];

    if (codigoPessoa) {
      this.carregarPessoa(codigoPessoa);
    }
  }

  get editando() {
    return Boolean(this.pessoa.codigo)
  }

  carregarPessoa(codigo: number) {
    this.pessoaService.buscarPorCodigo(codigo)
      .then(pessoa => {
        this.pessoa = pessoa;
      })
      .catch(erro => this.errorHandler.handle(erro));
  }

  salvar(form: FormControl){
    this.pessoaService.adicionar(this.pessoa)
      .then(() => {
        this.toasty.success('Pessoa adicionada com sucesso!');

        form.reset();
        this.pessoa = new Pessoa();
      })
      .catch(erro => this.errorHandler.handle(erro));
  }

}
