import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../../environments/environment';

@Injectable()
export class FashionService {

    constructor(private httpClient: HttpClient) { }

    createDina(name:string, price:number) {
        return this.httpClient.post(environment.apiUrl + 'dina/createDina', {'name':name, 'price':price});
    }

    getDina(){
        return this.httpClient.get(environment.apiUrl + 'dina/getDina');
    }

    updateDina(name:string, price:number) {
        return this.httpClient.patch(environment.apiUrl + 'dina/updateDina/:dinaId', {'name':name, 'price':price});
    }

}
