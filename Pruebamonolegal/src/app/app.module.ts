import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from  '@angular/common/http';


//servicios 
import {FacturasService} from './facturas.service';
  
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TablasComponent } from './tablas/tablas.component';
import { FooterComponent } from './footer/footer.component';


@NgModule({
  declarations: [
    AppComponent,
    TablasComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,

    HttpClientModule
  ],
  providers: [
    FacturasService

  ],
  bootstrap: [AppComponent]
})
export class AppModule {
   

 }
