import { Component, OnInit } from '@angular/core';
import {FacturasService} from './../facturas.service';


@Component({
  selector: 'app-tablas',
  templateUrl: './tablas.component.html',
  styleUrls: ['./tablas.component.css']
})

export class TablasComponent implements OnInit {
     
  datos:any[]=[];
  cambiarestado:boolean=true;
  editEstado:any={
    estado:''
  }
   

  constructor(private _datos:FacturasService, ) { 
    
    this.datos= _datos.obtenerdatos();
  
  }

  ngOnInit(): void {
  }


   cambioEstado(){
     
   }
   
}
