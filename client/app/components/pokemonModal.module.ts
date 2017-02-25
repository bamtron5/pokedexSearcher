import * as angular from 'angular';
import controller from './pokemonModal.controller';

const name = 'pokemonModal';
const template = '/client/app/components/pokemonModal.html';

export default angular.module('app.components.pokemonModal', [])
  .component(name, {
    templateUrl: template,
    controller: controller,
    controllerAs: 'vm',
    bindings: {
      pokemon: '<'
    }
  })
  .name;
