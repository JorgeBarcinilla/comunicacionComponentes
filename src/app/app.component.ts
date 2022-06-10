import { Component, ViewChild } from '@angular/core';
import { HijoComponent } from './components/hijo/hijo.component';
import { User } from './models/user.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  @ViewChild('componenteHijo', {static: false}) componenteHijo?: HijoComponent;

  title = 'comunicacionComponentes';
  datosHijo?: string
  user: User = {
    id: 1,
    name: 'Juan',
    email: 'xxxx@gmail.com'
  }

  ngOnInit(): void {

  }

  aceptarDatosHijo(datos: string){
    this.datosHijo = datos
  }

  enviarmeNombreDelHijo(){
    this.componenteHijo?.enviarNombreAlPadre();
  }
}
