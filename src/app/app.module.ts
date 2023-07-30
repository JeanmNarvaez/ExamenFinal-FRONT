import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { AppComponent } from './app.component';
import { LoginComponent } from './auth/login/login.component';
import { SignupComponent } from './auth/signup/signup.component';
import { InicioComponent } from './pages/inicio/inicio.component';
import { NopagesfoundComponent } from './pages/nopagesfound/nopagesfound.component';
import { HeaderComponent } from './shared/header/header.component';
import { AppRoutingModule } from './app-routing.module';
import { SlideshowComponent } from './shared/slideshow/slideshow.component';
import { LocationComponent } from './shared/location/location.component';
import { RedesSocialesComponent } from './shared/redes-sociales/redes-sociales.component';
import { BtnloginComponent } from './shared/btnlogin/btnlogin.component';
import { BtnnsignupComponent } from './shared/btnnsignup/btnnsignup.component';
import { BuscadorComponent } from './shared/buscador/buscador.component';
import { CartaComponent } from './shared/carta/carta.component';
import { UserComponent } from './user/user.component';
import { HttpClientModule } from '@angular/common/http';
import { BtncarneComponent } from './shared/btncarne/btncarne.component';
import { BtnhamburguesaComponent } from './shared/btnhamburguesa/btnhamburguesa.component';
import { BtnpizzaComponent } from './shared/btnpizza/btnpizza.component';
import { CartacarneComponent } from './shared/cartacarne/cartacarne.component';
import { CartahumburguesaComponent } from './shared/cartahumburguesa/cartahumburguesa.component';
import { CarneComponent } from './pages/carne/carne.component';
import { HamburguesaComponent } from './pages/hamburguesa/hamburguesa.component';
import { PizzaComponent } from './pages/pizza/pizza.component';
import { RecetaComponent } from './pages/receta/receta.component';
import { RecetacarneComponent } from './pages/recetacarne/recetacarne.component';
import { RecetahamburguesaComponent } from './pages/recetahamburguesa/recetahamburguesa.component';
import { DesayunosComponent } from './pages/desayunos/desayunos.component';
import { AlmuerzosComponent } from './pages/almuerzos/almuerzos.component';
import { SobrenosotrosComponent } from './pages/sobrenosotros/sobrenosotros.component';
import { CartadesayunosComponent } from './shared/cartadesayunos/cartadesayunos.component';
import { CartaalmuerzoComponent } from './shared/cartaalmuerzo/cartaalmuerzo.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignupComponent,
    InicioComponent,
    NopagesfoundComponent,
    HeaderComponent,
    SlideshowComponent,
    LocationComponent,
    RedesSocialesComponent,
    BtnloginComponent,
    BtnnsignupComponent,
    BuscadorComponent,
    CartaComponent,
    UserComponent,
    BtncarneComponent,
    BtnhamburguesaComponent,
    BtnpizzaComponent,
    CartacarneComponent,
    CartahumburguesaComponent,
    CarneComponent,
    HamburguesaComponent,
    PizzaComponent,
    RecetaComponent,
    RecetacarneComponent,
    RecetahamburguesaComponent,
    DesayunosComponent,
    AlmuerzosComponent,
    SobrenosotrosComponent,
    CartadesayunosComponent,
    CartaalmuerzoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    CommonModule    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
