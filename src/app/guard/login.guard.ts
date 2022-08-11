import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { LoginService } from '../service/login.service';

@Injectable({
  providedIn: 'root'
})
export class LoginGuard implements CanActivate {


  constructor(private loginService:LoginService,private router: Router){}

  canActivate():boolean{
    console.log('hi')
    if(!this.loginService.getToken()){
      this.router.navigate(['login'])
    }

    return this.loginService.getToken()

  }
    
  }

  

