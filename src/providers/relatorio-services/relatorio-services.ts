
import { Injectable } from '@angular/core';
import { Http,Headers,RequestOptions,Response } from '@angular/http';






/*
  Generated class for the RelatorioProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class RelatorioServiceProvider {


  constructor(public http: Http) {
  
  }
  getData(id,disciplina){
    const uri="https://curso-ferias.herokuapp.com";
    let headers=new Headers({"Content-Type":"application/x- www-form-url-urlencoded"});
    let options= new RequestOptions({headers:headers});
    return this.http
    .get(`${uri}/presenca?usuario=${id}&disciplina=${disciplina}`,options)
  }
}
