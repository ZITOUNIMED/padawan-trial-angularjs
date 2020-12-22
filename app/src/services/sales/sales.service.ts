import { SaleModel } from "../../models/sale.model";

export class SalesService {
    _$http: any;
    _$q: any;
    url = 'http://localhost:3000/sales';

    constructor($http, $q) {
        'ngInject';
    
        this._$http = $http;
        this._$q = $q;
      }

    foo(){
        console.log('Hello');
    }

    getSales(): Promise<Array<SaleModel>>{
        let deferred = this._$q.defer();
    
        this._$http({
          url: this.url,
          method: 'GET'
        })
        .then(
            (res) => deferred.resolve(res.data),
            (err) => deferred.reject(err)
        );
    
        return deferred.promise;
      }

      addNewSale(sale: SaleModel) {
        let deferred = this._$q.defer();
    
        this._$http({
          url: this.url,
          method: 'POST',
          data: sale,
        })
        .then(
            (res) => deferred.resolve(res.data),
            (err) => deferred.reject(err)
        );
    
        return deferred.promise;
      }
}