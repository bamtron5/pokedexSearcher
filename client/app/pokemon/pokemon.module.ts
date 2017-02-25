import * as angular from 'angular';
import controller from './pokemon.controller';
import route from './pokemon.route';
import PokemonModalComponent from '../components/pokemonModal.module';

const name = 'pokemon';
const template = '/client/app/pokemon/pokemon.html'

export default angular.module('app.pokemon', [
    PokemonModalComponent
  ])
  .component(name, {
    templateUrl: template,
    controller: controller,
    controllerAs: 'vm'
  })
  .config(route)
  .name;
