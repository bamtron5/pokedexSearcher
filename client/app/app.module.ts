import * as angular from 'angular';
import config from './app.config'
import run from './app.run';
import core from './core/core.module';
import 'angular-ui-router';

import LayoutComponent from './layout/layout.module';
import HomeComponent from './home/home.module';
import PokemonComponent from './pokemon/pokemon.module';

const name = 'app';
const dependencies = [
  'ui.router',
  core, //YOUR CORE DEPENDENCIES
  HomeComponent,
  LayoutComponent,
  PokemonComponent
];

angular.module(name, dependencies)
  .config(config)
  .run(run);

angular.bootstrap(document.body, [name], { strictDi: true });
