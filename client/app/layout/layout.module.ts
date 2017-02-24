import * as angular from 'angular';

const name = 'layout';
const template = '/client/app/layout/layout.html'

class LayoutController {}
LayoutController.$inject = [];


export default angular.module('app.layout', [])
  .component(name, {
    templateUrl: template,
    controller: LayoutController,
    controllerAs: 'vm'
  })
  .name;
