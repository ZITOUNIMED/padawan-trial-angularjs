import * as angular from 'angular';
import { SaleModel } from '../../models/sale.model';
import { SalesService } from '../../services/sales/sales.service';

/**
 * @ngInject
 */
export class AppComponent {
  // Define our AppComponent's name
  static componentName:string = "msApp";

  // Define our AppComponent's config
  static componentConfig:ng.IComponentOptions = {
    bindings: {},
    controller: AppComponent,
    templateUrl: 'src/components/start-app/start-app.component.html'
  };

  // Define our injectables
  private $mdSidenav:angular.material.ISidenavService;

  _$scope: any;
  salesService: SalesService;
  saveSale: any;

  // Define our constructor and inject the necessary services
  constructor($mdSidenav:angular.material.ISidenavService, salesService: SalesService, $scope) {
    // Store all of our injectables
    this.$mdSidenav = $mdSidenav;

    this.salesService = salesService;
    this._$scope = $scope;

    this.init();

    // binding methods with $scope
    $scope.displayAddSaleForm = this.displayAddSaleForm.bind(this);
    $scope.addNewSale = this.addNewSale.bind(this);
    $scope.searchSale = this.searchSale.bind(this);

  }

  init(){
    this._$scope.canDisplayAddSaleForm = false;
    
    this.salesService.getSales()
    .then(sales => {
      this._$scope.sales = sales;
    });
    
  }

  displayAddSaleForm = function(){
    this._$scope.canDisplayAddSaleForm = true;
  };
  

  addNewSale(sale: SaleModel){
    this.salesService.addNewSale(sale)
    .then(sales => {
      this._$scope.sales = sales;
    })
    .catch(error => {
      console.log(error);
    });
  }

  searchSale(){

  }

}
