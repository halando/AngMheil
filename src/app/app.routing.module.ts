import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { KapcsolatComponent } from './kapcsolat/kapcsolat.component';
import { HelyszinekComponent } from './helyszinek/helyszinek.component';
import { EsemenyekComponent } from './esemenyek/esemenyek.component';
import { InformaciokComponent } from './informaciok/informaciok.component';
import { PropertyRead } from '@angular/compiler';
const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'helyszinek', component: HelyszinekComponent },
  { path: 'esemenyek', component: EsemenyekComponent },
  { path: 'informaciok', component: InformaciokComponent },
  { path: 'kapcsolat', component: KapcsolatComponent }, // Ez lenne a home útvonal
  // További útvonalakat is hozzáadhatsz
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { 
    // Ebben a példában csak az 'exact' azaz az egyezés esetén fogja beállítani az aktív linket
  routerLinkActiveOptions : {exact:true}
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }















