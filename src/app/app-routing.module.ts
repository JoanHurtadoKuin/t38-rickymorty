import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


import {PaginaHomeComponent} from './pagina-home/pagina-home.component';
import {PersonajesComponent} from './personajes/personajes.component';
import {AboutUsComponent} from './about-us/about-us.component';
import { InformacionComponent } from './informacion/informacion.component';

const routes: Routes = [
  {
    path:'home',
    component:PaginaHomeComponent
  },
  {
    path:'personajes',
    component:PersonajesComponent
  },{
    path:'aboutus',
    component:AboutUsComponent
  },{
    path:'informacion/:id',
    component:InformacionComponent
    }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
