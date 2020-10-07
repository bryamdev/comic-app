import { Component, OnInit } from '@angular/core';
import { Heroe, HeroesService } from '../../servicios/heroes.service';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-buscar',
  templateUrl: './buscador.component.html',
  styles: [
  ]
})
export class BuscadorComponent implements OnInit {

  public terminoBus: string;
  public heroes: Heroe[];

  constructor( private activatedRoute: ActivatedRoute,
               private heroesService: HeroesService,
               private router: Router 
             ) {
  
    this.activatedRoute.params.subscribe( param =>{
      let termino = param['termino'];
      this.terminoBus = termino;
      if(termino){
        this.heroes = this.heroesService.buscarHeroes(termino);
      }else{
        this.router.navigate(['/heroes']);
      }
            
    });

  }

  ngOnInit(): void {

  }

  verHeroe( idx: number ){
    console.log("Padre: obteniendo el Id desde evento emitido por componente hijo");
    this.router.navigate( ['/heroe', idx] );
  }

}
