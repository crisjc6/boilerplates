import { Component } from '@angular/core';
import {ApiService} from "./api.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular';
  flores: any = [];
  columns = [
    {
      header:"Nombre Variedad",
      value: "nombreVariedad"
    },
    {
      header:"Imagen",
      value: "imgVariedad"
    },
    {
      header:"Grupo",
      value: "nombreComunGrupoVariedad"
    },
  ]
  constructor(private restService: ApiService ) {
    this.restService.getFlores().subscribe( res => {
      this.flores = res;
    })
  }
  ngOnInit() {

  }

}
