import * as angular from 'angular';

export class PokemonServiceClass {
  base:string = 'https://raw.githubusercontent.com/Biuni/PokemonGO-Pokedex/master/pokedex.json';
  constructor(
    private $http: ng.IHttpService
  ) {
  }

  searchPokemon() {

  }

  getPokemon() {
    return this.$http.get(this.base);
  }

}
PokemonServiceClass.$inject = ['$http'];

export const PokemonServiceModule = angular.module('app.services.pokemon', [])
  .service('PokemonService', PokemonServiceClass)
  .name;
