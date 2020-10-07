import { Component, OnInit } from '@angular/core';
import { HeroesService, Heroe } from '../../servicios/heroes.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styles: [
  ]
})
export class HeroesComponent implements OnInit {

  public heroes: Heroe[];

  constructor( private heroesService: HeroesService,
               private router: Router
             ) { 
    //console.log("constructor");
  }
  
  ngOnInit(): void {
    this.heroes = this.heroesService.getHeroes();
    //console.log("ngOnInit");
  }

  verHeroe( idx: number ){
    console.log("Padre: obteniendo el Id desde evento emitido por componente hijo");
    this.router.navigate( ['/heroe', idx] );
  }

}
