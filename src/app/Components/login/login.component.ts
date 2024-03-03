import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Login } from 'src/app/Model/loginModel';
import { ApiService } from 'src/app/Service/api.service';
import { CookieService } from 'ngx-cookie-service';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  login:Login = new Login();
  constructor(
    private _apiService:ApiService,
    private _router:Router,
    private _cookieService:CookieService 
  ){}
  
  ngOnInit ():void{
  
  }
  Login(){
    let loginData = this.login.LoginFormGroup.value;
    this._apiService.doLogIn(loginData).subscribe(
      res=>{
        let tokenValue=res.token;
        this._cookieService.set("access_token",tokenValue);
        let consoleValue= this._cookieService.get("access_token"); 
        console.log(consoleValue);
        this._router.navigateByUrl("/home");
      },
      err=>{
        console.log(err);
      }
    );
  }


}
