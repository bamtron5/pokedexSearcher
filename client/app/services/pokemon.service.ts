import * as angular from 'angular';

export class PokemonServiceClass {
  typesBase:string = 'http://pokeapi.co/api/v2/type/';
  base:string = 'https://raw.githubusercontent.com/Biuni/PokemonGO-Pokedex/master/pokedex.json';
  constructor(
    private $http: ng.IHttpService
  ) {
  }
  
  getPokemon() {
    return this.$http.get(this.base);
  }

  getTypes() {
    return this.$http.get(this.typesBase);
  }

}
PokemonServiceClass.$inject = ['$http'];

export const PokemonServiceModule = angular.module('app.services.pokemon', [])
  .service('PokemonService', PokemonServiceClass)
  .name;
