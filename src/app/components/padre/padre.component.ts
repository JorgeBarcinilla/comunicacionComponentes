import { Component, Input, OnInit } from '@angular/core';
import { User } from 'src/app/models/user.model';

@Component({
  selector: 'app-padre',
  templateUrl: './padre.component.html',
  styleUrls: ['./padre.component.scss']
})
export class PadreComponent implements OnInit {

  @Input() user?: User
  nombreHijo: string = 'No se ha recibido nada'

  constructor() { }

  ngOnInit(): void {
  }

  aceptarDatosHijo(datos: string){
    this.nombreHijo = datos
  }

}
