import { Pokemon } from '@app/_models';
import { Component, OnInit } from '@angular/core';
import { first } from 'rxjs/operators';
import { AccountService, AlertService } from '@app/_services';

@Component({ templateUrl: 'home.component.html' })

export class HomeComponent implements OnInit {
    constructor(private accountService: AccountService) { }
    //pokemon = this.accountService.pokemonValue;
    pokemons: Pokemon[] = [
      {id:"1",name:"Bulbasaur",type: ["Grass","Poison"],lvl:"-",image:""},
      {id:"2",name:"Ivysaur",type: ["Grass","Poison"],lvl:"-",image:""},
      {id:"3",name:"Charmander",type: ["Fire"],lvl:"-",image:""},
      {id:"4",name:"Charizard",type: ["Fire","Flying"],lvl:"-",image:""},
      {id:"5",name:"Squirtle",type: ["Water"],lvl:"-",image:""},
      {id:"6",name:"Caterpie",type: ["Bug"],lvl:"-",image:""},
      {id:"7",name:"Butterfree",type: ["Bug","Flying"],lvl:"-",image:""},
      {id:"8",name:"Weedle",type: ["Bug","Poison"],lvl:"-",image:""},
      {id:"9",name:"Kakuna",type: ["Bug","Poison"],lvl:"-",image:""},
      {id:"10",name:"Pidgeot",type: ["Normal","Flying"],lvl:"-",image:""},
      {id:"11",name:"Raticate",type: ["Normal"],lvl:"-",image:""},
      {id:"12",name:"Spearow",type: ["Normal","Flying"],lvl:"-",image:""}
    ];

    ngOnInit() {
      return this.accountService
        .getAllPokemons()
        .subscribe((pokemons: Pokemon[]) => this.pokemons = this.pokemons);
    }
  }

