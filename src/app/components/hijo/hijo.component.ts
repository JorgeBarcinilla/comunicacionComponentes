import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-hijo',
  templateUrl: './hijo.component.html',
  styleUrls: ['./hijo.component.scss']
})
export class HijoComponent implements OnInit {

  nombre: string  = '';
  @Input() datos?: string
  @Output() enviarDatosHijo = new EventEmitter<string>()

  constructor() {

  }

  ngOnInit(): void {

  }

  enviarNombreAlPadre(){
    this.enviarDatosHijo.emit(this.nombre)
  }

}
