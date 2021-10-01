import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  api:string = "http://salesdevservices.mosflor.com/Catalogo/api/Variedades";
  constructor(
    private http: HttpClient
  ) { }

  getFlores() {
    return this.http.get(this.api)
  }
}
