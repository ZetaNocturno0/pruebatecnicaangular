import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component'; 
import { AppRoutingModule } from './app-routing.module';
import { EmpleadoService } from './services/empleado.service';
import { RegistroEmpleadosComponent } from './registro-empleados/registro-empleados.component';
import { ConsultaEmpleadosComponent } from './consulta-empleados/consulta-empleados.component';
import { EditarEmpleadoComponent } from './editar-empleado/editar-empleado.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [];

@NgModule({
  declarations: [
    AppComponent,
    RegistroEmpleadosComponent,
    ConsultaEmpleadosComponent,
    EditarEmpleadoComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(routes),
    AppRoutingModule
  ],
  providers: [
    EmpleadoService 
  ],
  bootstrap: [] 
})
export class AppModule { }
