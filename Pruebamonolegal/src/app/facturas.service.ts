import { Injectable } from '@angular/core';
import { HttpClient } from  '@angular/common/http';

@Injectable({
  providedIn: 'root'

})


export class FacturasService {
  datos:Array<any> =[
    {
      CodigoFactura: "001" , Cliente:'Daniel', Ciudad:'bogota' ,  nit:'12121212121' , total:"12.900", estado:"primerrecordatorio", Pagada:"false", FechaCreacion:"2020-08-05" 
    },
    {
      CodigoFactura: "05" , Cliente:'Esteban', Ciudad:'bogota' ,  nit:'122344434' , total:"12.900", estado:"primerrecordatorio", Pagada:"false", FechaCreacion:"2020-08-07"
    },
    {
      CodigoFactura: "001" , Cliente:'juliao', Ciudad:'bogota' ,  nit:'1211288441' , total:"12.900", estado:"segundoRecordatorio", Pagada:"false", FechaCreacion:"2020-09-12"
    }
  ]

  

  constructor(private  httpClient:  HttpClient, ) {
    console.log("funciona")
   }

   obtenerdatos(){
     return this.datos 
     
   }
}
