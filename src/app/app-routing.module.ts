import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InicioComponent } from './pages/inicio/inicio.component';
import { LoginComponent } from './auth/login/login.component';
import { SignupComponent } from './auth/signup/signup.component';
import { NopagesfoundComponent } from './pages/nopagesfound/nopagesfound.component';
import { UserComponent } from './user/user.component';
import { PizzaComponent } from './pages/pizza/pizza.component';
import { CarneComponent } from './pages/carne/carne.component';
import { HamburguesaComponent } from './pages/hamburguesa/hamburguesa.component';
import { RecetaComponent } from './pages/receta/receta.component';
import { RecetacarneComponent } from './pages/recetacarne/recetacarne.component';
import { RecetahamburguesaComponent } from './pages/recetahamburguesa/recetahamburguesa.component';
import { DesayunosComponent } from './pages/desayunos/desayunos.component';
import { AlmuerzosComponent } from './pages/almuerzos/almuerzos.component';
import { SobrenosotrosComponent } from './pages/sobrenosotros/sobrenosotros.component';

const routes: Routes =[
  {path: 'user', component: UserComponent},

  { path: "inicio", component: InicioComponent },
  { path: "login", component: LoginComponent },
  { path: "register", component: SignupComponent },
  { path: "pizza", component: PizzaComponent },
  { path: "carne", component: CarneComponent },
  { path: "hamburguesa", component: HamburguesaComponent },
  { path: "receta", component: RecetaComponent },
  { path: "recetacarne", component: RecetacarneComponent },
  { path: "recetahamburguesa", component: RecetahamburguesaComponent },
  { path: "desayunos", component: DesayunosComponent },
  { path: "almuerzos", component: AlmuerzosComponent },
  { path: "sobrenosotros", component: SobrenosotrosComponent },
  { path: "", redirectTo: "/inicio", pathMatch: "full"},

  { path: "**", component: NopagesfoundComponent }

]

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports:[RouterModule]
})
export class AppRoutingModule { }
