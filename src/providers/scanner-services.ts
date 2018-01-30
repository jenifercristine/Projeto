import {HttpClient}from "@angular/common/http";
import{Injectable}from "@angular/core";

import uuid from "uuid";

@Injectable()
export class ScannerServiceProvider{
constructor(public http:HttpClient){}

    postData(id,disciplina){
     const uri="https://curso-ferias.herokuapp.com"
     const body ={
        id:uuid.v4(),
        dia:new Date(),
        disciplina: disciplina,
        usuario:id
     };
     return this.http.post(`${uri}/presenca`,body);
    }
}