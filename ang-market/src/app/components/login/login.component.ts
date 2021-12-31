import { Component, OnInit } from '@angular/core';
import { OktaAuthService } from '@okta/okta-angular';
//@ts-ignore
import * as OktaSignIn from '@okta/okta-signin-widget'

//https://developer.okta.com/code/angular/okta_angular_sign-in_widget/#login



import appconfig from 'src/app/config/appconfig';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  oktaSignin:any;

  constructor(private _oktaAutService:OktaAuthService ) {

    this.oktaSignin=new OktaSignIn({
        logo:'',
        features:{ 
          registration:true //for registration
        },
        baseUrl:appconfig.oidc.issuer.split('/oauth2')[0],
        clientId:appconfig.oidc.clientId,
        redirectUri:appconfig.oidc.redirectUri,
        authParams:{
          pkce:true,
          issuer:appconfig.oidc.issuer,
          scopes:appconfig.oidc.scopes
        }

    } );
   }

  ngOnInit(): void {

    this.oktaSignin.remove();
    this.oktaSignin.renderEl({
      el:'#okta-signin'},   //same as in html id
      
      (response: { status: string; }) =>{
        if (response.status ==='SUCCESS'){
          this._oktaAutService.signInWithRedirect();
        }
      },
      (error: any) => {
        throw error;
      }
      )
  }


}
