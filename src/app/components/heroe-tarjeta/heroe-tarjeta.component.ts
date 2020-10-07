import { Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import { Router } from '@angular/router';

import { Heroe } from '../../servicios/heroes.service';

@Component({
  selector: 'app-heroe-tarjeta',
  templateUrl: './heroe-tarjeta.component.html'
})
export class HeroeTarjetaComponent implements OnInit {

  //Un componente padre alimentará este atributo
  @Input() public heroe: Heroe;

  //Este componente hijo emite un evento al padre cuando se selecciona verHeroe()
  @Output() public idHeroeSeleccionado: EventEmitter<number>;

  constructor( private router: Router ) {
    this.idHeroeSeleccionado = new EventEmitter();
  }

  ngOnInit(): void {
  }

  verHeroe( id: number ){
    /* console.log(id);
    this.router.navigate(['/heroe', id]); */
    console.log("Hijo: emitiendo id del heroe mediante un evento");
    this.idHeroeSeleccionado.emit(this.heroe.id);
  }

}
