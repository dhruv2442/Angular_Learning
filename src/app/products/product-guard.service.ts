import { Injectable } from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, Router} from '@angular/router';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class ProductGuardService implements CanActivate {

    canActivate(route: ActivatedRouteSnapshot,): boolean{
            let id = +route.url[1].path;
            if(isNaN (id) || id < 1){
                alert("Invalid product Id");
                this._router.navigate(['/products']);
                return false;
            };
            return true;
    }
constructor(private _router : Router) { }

}
