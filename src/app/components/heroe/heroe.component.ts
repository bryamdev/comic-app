import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router'
import { Heroe, HeroesService } from '../../servicios/heroes.service';

@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html'
})
export class HeroeComponent {

  public heroe: Heroe;

  constructor( private activatedRoute: ActivatedRoute,
               private heroesService: HeroesService,
               private router: Router ) { 

    this.activatedRoute.params.subscribe( params =>{

      let id = params['id'];
      this.heroe = heroesService.getHeroe(id);

      if(this.heroe == null){
        console.log(`No existe un heroe con id: ${id}`);
        this.router.navigate(['/heroes']);
      }      

    });

  }


}
