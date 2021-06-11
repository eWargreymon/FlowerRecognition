import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormularioComponent } from './components/formulario/formulario.component';
import { PrediccionComponent } from './components/prediccion/prediccion.component';
import { FloresComponent } from './components/flores/flores.component';
import { InformacionComponent } from './components/informacion/informacion.component';
import { AngularFirestore } from '@angular/fire/firestore';
import { AngularFireModule } from '@angular/fire';
import { environment } from 'src/environments/environment';
import { AgregarComponent } from './components/agregar/agregar.component';
import { ReactiveFormsModule } from "@angular/forms";
import { CamaraComponent } from './components/camara/camara.component';

@NgModule({
  declarations: [
    AppComponent,
    FormularioComponent,
    PrediccionComponent,
    FloresComponent,
    InformacionComponent,
    AgregarComponent,
    CamaraComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    ReactiveFormsModule
  ],
  providers: [AngularFirestore],
  bootstrap: [AppComponent]
})
export class AppModule { }
