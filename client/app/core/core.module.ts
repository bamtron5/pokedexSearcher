import * as angular from 'angular';
import coreConstants from './core.constants';
import coreFilters from './core.filters';
import authInterceptor from './interceptor.factory';
import 'angular-resource';
import 'angular-messages';
import {PokemonServiceModule} from '../services/pokemon.service';

export default angular.module('app.core', [
  'ngResource',
  'ngMessages',
  coreConstants,
  coreFilters,
  authInterceptor,
  PokemonServiceModule
])
.name;
