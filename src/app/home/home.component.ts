import { Pokemon } from '@app/_models';
import { Component, OnInit } from '@angular/core';
import { first } from 'rxjs/operators';
import { AccountService, AlertService } from '@app/_services';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({ templateUrl: 'home.component.html' })

export class HomeComponent implements OnInit {
    constructor(private accountService: AccountService) { }
    //pokemon = this.accountService.pokemonValue;
    pokemons: any[] = [
      {name:"hola",type:["hola"],lvl:"hola"}
    ];

    ngOnInit() {
      this.accountService.getAllPokemons()
          .pipe(first())
          .subscribe(pokemons => this.pokemons = pokemons);
    }

  }

