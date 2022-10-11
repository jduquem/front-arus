import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { PropietariosComponent } from './components/propietarios/propietarios.component';
import { SolicitudesComponent } from './components/solicitudes/solicitudes.component';
import { VehiculosComponent } from './components/vehiculos/vehiculos.component';

const routes: Routes = [
  { path: 'dashboard', component: DashboardComponent},
  { path: 'owners', component: PropietariosComponent},
  { path: 'vehicles', component: VehiculosComponent},
  { path: 'applications', component: SolicitudesComponent},
  { path: '', redirectTo: 'dashboard', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
