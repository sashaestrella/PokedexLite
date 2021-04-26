import { Pokemon } from '@app/_models';
import { Component, OnInit } from '@angular/core';
import { first } from 'rxjs/operators';
import { AccountService, AlertService } from '@app/_services';

@Component({ templateUrl: 'home.component.html' })

export class HomeComponent implements OnInit {
    pokemons = Pokemon.pokemons;
    constructor(private accountService: AccountService) { }
    //pokemon = this.accountService.pokemonValue;

    ngOnInit() {
      return this.accountService
        .getAllPokemons()
        .subscribe((pokemons: Pokemon[]) => this.pokemons = this.pokemons);
    }
  }

