import { Injectable } from '@angular/core';
import { ApiService } from "./api.service";
import { Observable } from "rxjs";

@Injectable({
    providedIn: 'root'
})


export class ProductsService {

    constructor(private apiService: ApiService) { }

    // Declare get products through api
    getProducts = (url: string, params: any): Observable<any> => {
        return this.apiService.get(url, params);
    }

}
