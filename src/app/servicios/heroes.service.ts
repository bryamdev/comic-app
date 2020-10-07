import { Injectable } from '@angular/core';
import {HEROES } from './datos';

@Injectable()
export class HeroesService {

    private heroes: Heroe[] = HEROES;

    constructor(){
        console.log("Servicio listo para ser usado");
    }

    getHeroes(): Heroe[] {
        return this.heroes;
    }

    getHeroe(id: number): Heroe{

      let heroeInt: Heroe = null;

      /*
      for(let i=0; i< this.heroes.length; i++){

        let heroe = this.heroes[i];
        if(heroe.id == id){
          heroeInd = heroe;
        }
      }
      */

      this.heroes.forEach( heroe =>{
        //console.log(`Iteracion en heroe: ${heroe.nombre}`);
        if(heroe.id == id){
          heroeInt = heroe;
        }
      });
      

      return heroeInt;
    }

    buscarHeroes( termino: string ): Heroe[]{

      let heroesRes: Heroe[] = [];
      termino = termino.toLowerCase();

      this.heroes.forEach( heroe =>{
        let nombre = heroe.nombre.toLowerCase();
        if( nombre.match(termino) ){
          heroesRes.push( heroe );
        }
      })
      
      return heroesRes;
    }
}

export interface Heroe{
    id: number,
    nombre: string,
    bio: string,
    img: string,
    aparicion: string,
    casa: string
}