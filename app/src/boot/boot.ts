/// <reference path="../../../typings/index.d.ts" />

// Import our Angular dependencies
import * as angular from 'angular';
import 'angular-animate';
import 'angular-aria';
import 'angular-material';
import 'angular-messages';
import 'angular-sanitize';

import { AppComponent } from '../components/start-app/start-app.component.ts';
import { SalesService } from "../services/sales/sales.service.ts";

module MaterialStart {
  "use strict";

  // Register our module and it's dependencies
  angular.module('MaterialStart', ['ngMaterial', 'ngSanitize'])
    .config(function ($mdThemingProvider:angular.material.IThemingProvider) {
      $mdThemingProvider.theme('default')
        .primaryPalette('brown')
        .accentPalette('red');
/*
        $routeProvider
        .when("/", {
          controller : SalesComponent
        })
        .when("/search", {
          controller : SearchComponent
        })*/
    })

    // Register all of our components
    .component(AppComponent.componentName, AppComponent.componentConfig)
    .service('salesService', SalesService);
  ;
}
