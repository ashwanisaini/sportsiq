import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';
import { Router, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';

@Injectable()
export class PlayerAuthGuard implements CanActivate {

    constructor(private router: Router) { }

    canActivate() {
    
        if (localStorage.getItem('user_id') && localStorage.getItem('access_token') && localStorage.getItem('user_role')=='3' && localStorage.getItem('is_paid')=="1") {
            console.log("Here");
            return true;
        } 
        else if (localStorage.getItem('user_id') && localStorage.getItem('access_token') && localStorage.getItem('user_role')=='3' && localStorage.getItem('is_paid')!="1") {
            this.router.navigate(['frontend/payment']);  
            console.log("There");
            return false; 
        }       
		this.router.navigate(['/home']);
        return false;
    }

     
}