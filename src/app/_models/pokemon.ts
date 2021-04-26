export class Pokemon {
  static pokemons: Pokemon[] = [
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
  ]
  constructor(
      public name: string,
      public type: String[],
      public lvl: string,
      public image: String,
      public id?: string,
      public abilitiesyevolutins?: String[]

  ) {}
}

